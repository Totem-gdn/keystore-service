import { join } from 'path';
import { readFileSync } from 'fs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig, { IAppConfig, APP_NAMESPACE } from './configuration/app/app.config';
import dbConfig, { IMongoDbConfig, MONGODB_NAMESPACE } from './configuration/mongodb/mongodb.config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [appConfig, dbConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const mongoDbCfg = configService.get<IMongoDbConfig>(MONGODB_NAMESPACE);
        const appCfg = configService.get<IAppConfig>(APP_NAMESPACE);
        const dbConfig: MongooseModuleOptions = {
          uri: mongoDbCfg.uri,
          dbName: mongoDbCfg.database,
        };
        if (appCfg.env === 'production') {
          // FIXME: AWS DocumentDB connection string uses ssl_ca_certs option, which is not supported (use sslCA option instead?)
          dbConfig.ssl = true;
          dbConfig.sslValidate = true;
          dbConfig.sslCA = readFileSync(join(process.cwd(), 'rds-combined-ca-bundle.pem'), { encoding: 'ascii' });
        }
        return dbConfig;
      },
      inject: [ConfigService],
    }),
    HealthModule,
    UsersModule,
  ],
})
export class AppModule {}
