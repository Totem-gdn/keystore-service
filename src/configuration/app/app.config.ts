import { registerAs } from '@nestjs/config';

export const APP_NAMESPACE = 'app';

export interface IAppConfig {
  host: string;
  port: number;
}

export default registerAs(
  APP_NAMESPACE,
  (): IAppConfig => ({
    host: process.env.GRPC_HOST || '0.0.0.0',
    port: parseInt(process.env.PORT, 10) || 50051,
  }),
);
