import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
  BadRequestException,
  Req,
  Logger,
} from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Public } from '../../guards/public.guard';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { RefreshAuthDto } from './dto/refresh-auth.dto';
import { Throttle } from '@nestjs/throttler';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Post('/sign-in')
  async create(@Body() loginAuthDto: LoginAuthDto) {
    const user = await this.userService.findByEmail(loginAuthDto.email);

    const isPasswordValid = await this.authService.validatePassword(
      loginAuthDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect User or Password.');
    }

    return this.authService.generateAccessToken(user);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { limit: 5, ttl: 20000 } })
  @Post('/refresh')
  async refresh(@Body() refreshAuthDto: RefreshAuthDto) {
    const isTokenExpired = await this.authService.willExpireToken(
      refreshAuthDto.refreshToken,
    );

    if (!isTokenExpired) throw new UnauthorizedException('Invalid token.');

    const decodeToken = this.authService.decode(refreshAuthDto.refreshToken);

    const user = await this.userService.findByEmail(decodeToken.email);

    return this.authService.generateAccessToken(user, true);
  }
}
