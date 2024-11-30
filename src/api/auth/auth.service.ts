import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../users/schemas/user.schema';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import dayjs from 'dayjs';
import { UsersService } from '../users/users.service';

export interface Payload {
  id: string;
  name: string;
  email: string;
  active: boolean;
  createToken: any;
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  /**
   * Validates a plain text password against a hashed password.
   *
   * @param {string} plainTextPassword - The plain text password to be validated.
   * @param {string} hashedPassword - The hashed password for comparison.
   * @return {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the plain text password matches the hashed password.
   */
  async validatePassword(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }

  /**
   * return jwt signed
   * @param user
   */
  payload = (user: User): Payload => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      active: user.active,
      createToken: dayjs().unix(),
    };
  };

  async generateAccessToken(
    user: User,
    refresh: boolean = false,
  ): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    const payload = this.payload(user);

    return {
      accessToken: this.sign(payload),
      refreshToken: this.sign(payload, {
        expiresIn: this.configService.get('JWT_SECRET_EXPIRES_REFRESH_IN'),
      }),
    };
  }

  /**
   * Signs a payload using JWT.
   *
   * @param {Partial<User>} payload - The payload to sign.
   * @param {JwtSignOptions} [options] - The options for signing the payload (optional).
   * @private
   * @returns {string} - The signed JWT token.
   */
  private sign(payload: Payload, options?: JwtSignOptions): string {
    return this.jwtService.sign(payload, options);
  }

  /**
   * Checks if the given token will expire in the future.
   *
   * @param {string} token - The JWT token to be checked.
   * false if it will not, and undefined if an error occurs during verification.
   */
  async willExpireToken(token: string): Promise<boolean | undefined> {
    try {
      await this.verify(token, this.configService.get('JWT_SECRET'));
      const payload = this.decode(token);
      const now = dayjs(new Date()).unix();

      return payload.exp > now;
    } catch (e) {
      return undefined;
    }
  }

  /**
   * return jwt signed
   * @param token
   * @param secret
   */
  verify(token: string, secret: string) {
    return this.jwtService.verifyAsync(token, { secret });
  }

  /**
   * return jwt signed
   * @param token
   */
  decode(token: string) {
    return this.jwtService.decode(token);
  }
}
