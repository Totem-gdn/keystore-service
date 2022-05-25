import { Controller, UseFilters, UsePipes } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import { ProviderProfileDto } from './dto/provider-profile.dto';
import { UserDto } from './dto/user.dto';
import { PublicKeyDto } from './dto/public-key.dto';
import { RpcValidationPipe } from '../utils/pipes/rpc-validation.pipe';
import { UnhandledExceptionFilter } from '../utils/filters/unhandled-exception.filter';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseFilters(UnhandledExceptionFilter)
  @UsePipes(new RpcValidationPipe(true))
  @GrpcMethod('User', 'FindOrCreate')
  async findOneOrCreate(profile: ProviderProfileDto): Promise<UserDto> {
    return await this.userService.findOrCreate(profile);
  }

  @UseFilters(UnhandledExceptionFilter)
  @UsePipes(new RpcValidationPipe(true))
  @GrpcMethod('User', 'GetPublicKey')
  async getPublicKey(user: UserDto): Promise<PublicKeyDto> {
    return await this.userService.getPublicKey(user);
  }
}
