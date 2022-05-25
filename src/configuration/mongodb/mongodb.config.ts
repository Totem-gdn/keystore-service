import { registerAs } from '@nestjs/config';

export const MONGODB_NAMESPACE = 'mongodb';

export interface IMongoDbConfig {
  uri: string;
  database: string;
}

export default registerAs(
  MONGODB_NAMESPACE,
  (): IMongoDbConfig => ({
    uri: process.env.MONGODB_URI,
    database: process.env.MONGODB_DATABASE,
  }),
);
