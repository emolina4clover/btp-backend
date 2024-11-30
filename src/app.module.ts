import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExternalApiModule } from './modules/data-sources/external-api/external-api.module';
import { TransformationsModule } from './modules/data-transformations/transformations.module';
import { PrestaShopBusinessRulesModule } from './modules/business-rules/prestashop-business-rules.module';
import { ApiController } from './modules/api/controllers/api.controller';
import { validate } from './env.validate';
import { Throttler } from './throttler/throttler';
import { JwtRegister } from './jwt/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AuthGuard } from './guards/auth.guard';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
    }),
    Throttler,
    JwtRegister,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: `mongodb+srv://${config.get('MONGODB_USER')}@${config.get(
          'MONGODB_URL',
        )}`,
      }),
    }),
    AuthModule,
    UsersModule,
    ExternalApiModule,
    TransformationsModule,
    PrestaShopBusinessRulesModule,
  ],
  controllers: [ApiController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
