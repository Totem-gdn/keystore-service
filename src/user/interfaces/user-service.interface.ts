export interface FindOrCreateRequest {
  id: string;
  provider: string;
  username: string;
}

export interface FindOrCreateResponse {
  id: string;
}

export interface PublicKeyRequest {
  id: string;
}

export interface PublicKeyResponse {
  publicKey: string;
}

export interface User {
  FindOrCreate(profile: FindOrCreateRequest): FindOrCreateResponse;
  GetPublicKey(user: PublicKeyRequest): PublicKeyResponse;
}
