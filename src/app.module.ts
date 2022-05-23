import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './configuration/app/app.config';
import dbConfig, { IDbConfig, DB_NAMESPACE } from './configuration/db/db.config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from './health/health.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [appConfig, dbConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<IDbConfig>(DB_NAMESPACE).uri,
      }),
      inject: [ConfigService],
    }),
    HealthModule,
    UserModule,
  ],
})
export class AppModule {}
