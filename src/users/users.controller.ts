import { Controller, UseFilters, UsePipes } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { ProviderProfileDto } from './dto/provider-profile.dto';
import { UserDto } from './dto/user.dto';
import { PublicKeyDto } from './dto/public-key.dto';
import { RpcValidationPipe } from '../utils/pipes/rpc-validation.pipe';
import { UnhandledExceptionFilter } from '../utils/filters/unhandled-exception.filter';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseFilters(UnhandledExceptionFilter)
  @UsePipes(new RpcValidationPipe(true))
  @GrpcMethod('Users', 'FindOrCreate')
  async findOneOrCreate(profile: ProviderProfileDto): Promise<UserDto> {
    return await this.usersService.findOrCreate(profile);
  }

  @UseFilters(UnhandledExceptionFilter)
  @UsePipes(new RpcValidationPipe(true))
  @GrpcMethod('Users', 'GetPublicKey')
  async getPublicKey(user: UserDto): Promise<PublicKeyDto> {
    return await this.usersService.getPublicKey(user);
  }
}
