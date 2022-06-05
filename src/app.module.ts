import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './configuration/app/app.config';
import mongoDbConfig, { IMongoDbConfig, MONGODB_NAMESPACE } from './configuration/mongodb/mongodb.config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [appConfig, mongoDbConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const mongoDbCfg = configService.get<IMongoDbConfig>(MONGODB_NAMESPACE);
        const dbConfig: MongooseModuleOptions = {
          uri: mongoDbCfg.uri,
          dbName: mongoDbCfg.database,
        };
        return dbConfig;
      },
      inject: [ConfigService],
    }),
    HealthModule,
    UsersModule,
  ],
})
export class AppModule {}
