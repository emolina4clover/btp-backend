import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

export const JwtRegister = JwtModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    global: true,
    secret: config.get('JWT_SECRET'),
    signOptions: { expiresIn: config.get('JWT_SECRET_EXPIRES_IN') },
  }),
});
