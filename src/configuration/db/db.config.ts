import { registerAs } from '@nestjs/config';

export const DB_NAMESPACE = 'db';

export interface IMongoDbConfig {
  uri: string;
}

export default registerAs(
  DB_NAMESPACE,
  (): IMongoDbConfig => ({
    uri: process.env.DB_URI,
  }),
);
