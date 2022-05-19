import { Injectable } from '@nestjs/common';
import { Profile, PublicKey, User } from './interfaces/keys.interface';

@Injectable()
export class KeysService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findOneOrCreate(profile: Profile): Promise<User> {
    return { id: '' };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getPublicKey(user: User): Promise<PublicKey> {
    return { publicKey: '' };
  }
}
