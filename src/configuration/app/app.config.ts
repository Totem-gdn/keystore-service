import { registerAs } from '@nestjs/config';

export const APP_NAMESPACE = 'app';

export interface IAppConfig {
  env: string;
  host: string;
  port: number;
}

export default registerAs(
  APP_NAMESPACE,
  (): IAppConfig => ({
    env: process.env.NODE_ENV || 'development',
    host: process.env.GRPC_HOST || '0.0.0.0',
    port: parseInt(process.env.PORT, 10) || 50051,
  }),
);
