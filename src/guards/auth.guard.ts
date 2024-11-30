import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './public.guard';
import { UsersService } from '../api/users/users.service';
import { Payload } from '../api/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private reflector: Reflector,
    private usersService: UsersService,
  ) {}

  /**
   * This function checks if a token exists in the request header, verifies the token using a JWT services, and assigns the
   * payload to the request object for access in route handlers.
   * @param {ExecutionContext} context - The `context` parameter is an instance of the `ExecutionContext` class. It
   * provides information about the current execution context, such as the type of the current platform (e.g., HTTP,
   * WebSocket, etc.) and the underlying request and response objects.
   * @returns The `canActivate` function returns a Promise that resolves to a boolean value. In this case, it always
   * returns `true`.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    let jwtUser: Payload;

    try {
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      jwtUser = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });
    } catch (error) {
      throw new UnauthorizedException();
    }

    const user = await this.usersService.findByEmail(jwtUser.email);

    if (!user) throw new UnauthorizedException();

    request['user'] = user;

    return true;
  }

  /**
   * The function extracts a token from the authorization header of a request if the type is "bearer".
   * @param {Request} request - The `request` parameter is of type `Request`. It represents an HTTP request object that
   * contains information about the incoming request, such as headers, body, and query parameters.
   * @returns a string if the type of authorization is 'bearer', otherwise it returns undefined.
   */
  /**
   * The function extracts a token from the authorization header of a request if the type is "bearer".
   * @param {Request} request - The `request` parameter is of type `Request`. It represents an HTTP request object that
   * contains information about the incoming request, such as headers, body, and query parameters.
   * @returns a string if the type of authorization is 'bearer', otherwise it returns undefined.
   */
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
