import { registerAs } from '@nestjs/config';

export const APP_NAMESPACE = 'app';

export interface IAppConfig {
  host: string;
  port: string;
}

export default registerAs(
  APP_NAMESPACE,
  (): IAppConfig => ({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
);
