import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtRegister } from '../../jwt/jwt';

@Module({
  imports: [UsersModule, JwtRegister],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
