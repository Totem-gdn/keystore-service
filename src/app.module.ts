import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './configuration/grpc/grpc.config';
import dbConfig, { IMongoDbConfig, MONGODB_NAMESPACE } from './configuration/mongodb/mongodb.config';
import { MongooseModule } from '@nestjs/mongoose';
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
        return {
          uri: mongoDbCfg.uri,
          dbName: mongoDbCfg.database,
        };
      },
      inject: [ConfigService],
    }),
    HealthModule,
    UsersModule,
  ],
})
export class AppModule {}
