import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { APP_NAMESPACE, IAppConfig } from './configuration/app/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const { host, port } = configService.get<IAppConfig>(APP_NAMESPACE);
  Logger.log(`gRPC running at: ${host}:${port}`);
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'keys',
      url: `${host}:${port}`,
      protoPath: join(__dirname, 'keys', 'proto', 'keys.proto'),
    },
  });
  await app.startAllMicroservices();
}

void bootstrap();
