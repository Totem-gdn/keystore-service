export interface ProviderProfile {
  provider: string;
  id: string;
  username: string;
}

export interface User {
  id: string;
}

export interface PublicKey {
  publicKey: string;
}

export interface UserService {
  FindOneOrCreate(profile: ProviderProfile): User;
  GetPublicKey(user: User): PublicKey;
}
