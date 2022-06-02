import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { GrpcOptions, MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { APP_NAMESPACE, IAppConfig } from './configuration/app/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const { host, port } = configService.get<IAppConfig>(APP_NAMESPACE);
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: ['grpc.health.v1', 'users'],
      url: `${host}:${port}`,
      protoPath: [join(__dirname, 'health', 'proto', 'health.proto'), join(__dirname, 'users', 'proto', 'users.proto')],
    },
  } as GrpcOptions);
  await app.startAllMicroservices();
}

void bootstrap();
