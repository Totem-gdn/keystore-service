declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    GRPC_HOST: string;
    GRPC_PORT: string;
  }
}
