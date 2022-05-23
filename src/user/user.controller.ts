import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import { ProviderProfile, PublicKey, User } from './interfaces/user-service.interface';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'FindOneOrCreate')
  async findOneOrCreate(profile: ProviderProfile): Promise<User> {
    return await this.userService.findOneOrCreate(profile);
  }

  @GrpcMethod('UserService', 'GetPublicKey')
  async getPublicKey(user: User): Promise<PublicKey> {
    return await this.userService.getPublicKey(user);
  }
}
