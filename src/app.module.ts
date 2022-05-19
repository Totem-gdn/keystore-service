import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './configuration/app/app.config';
import dbConfig from './configuration/db/db.config';
import { KeysModule } from './keys/keys.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [appConfig, dbConfig],
    }),
    KeysModule,
  ],
})
export class AppModule {}
