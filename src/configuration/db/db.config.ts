import { registerAs } from '@nestjs/config';

export const MONGODB_NAMESPACE = 'mongo-db';

export interface IMongoDbConfig {
  uri: string;
}

export default registerAs(
  MONGODB_NAMESPACE,
  (): IMongoDbConfig => ({
    uri: process.env.MONGODB_URI,
  }),
);
