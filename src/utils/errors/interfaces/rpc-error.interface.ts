export interface RpcError {
  status: number;
  errors: {
    [key: string]: string | string[];
  };
}
