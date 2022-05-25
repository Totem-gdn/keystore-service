import { registerAs } from '@nestjs/config';

export const GRPC_NAMESPACE = 'grpc';

export interface IGrpcConfig {
  host: string;
  port: number;
}

export default registerAs(
  GRPC_NAMESPACE,
  (): IGrpcConfig => ({
    host: process.env.GRPC_HOST || '0.0.0.0',
    port: parseInt(process.env.PORT, 10) || 50051,
  }),
);
