import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { KeysService } from './keys.service';
import { Profile, PublicKey, User } from './interfaces/keys.interface';

@Controller()
export class KeysController {
  constructor(private readonly keysService: KeysService) {}

  @GrpcMethod('KeysStorageService', 'FindOneOrCreate')
  async findOneOrCreate(profile: Profile): Promise<User> {
    return await this.keysService.findOneOrCreate(profile);
  }

  @GrpcMethod('KeysStorageService', 'GetPublicKey')
  async getPublicKey(user: User): Promise<PublicKey> {
    return await this.keysService.getPublicKey(user);
  }
}
