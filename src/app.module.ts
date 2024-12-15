import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from './env.validate';
import { Throttler } from './throttler/throttler';
import { JwtRegister } from './jwt/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AuthGuard } from './guards/auth.guard';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';
import { ProductsModule } from './api/products/products.module';
import { AssetsModule } from './api/assets/assets.module';
import { ResourcesModule } from './api/resources/resources.module';
import { CartModule } from './api/cart/cart.module';

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
    ProductsModule,
    AssetsModule,
    ResourcesModule,
    CartModule,
  ],
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
