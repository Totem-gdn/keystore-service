import { registerAs } from '@nestjs/config';

export const DB_NAMESPACE = 'db';

export interface IDbConfig {
  uri: string;
}

export default registerAs(
  DB_NAMESPACE,
  (): IDbConfig => ({
    uri: process.env.DB_URI,
  }),
);
