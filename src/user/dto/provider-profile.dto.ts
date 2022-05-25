import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class ProviderProfileDto {
  // constructor(id: string, provider: string, username: string) {
  //   this.id = id;
  //   this.provider = provider;
  //   this.username = username;
  // }

  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['google', 'twitter', 'facebook'])
  provider: string;

  @IsString()
  @IsNotEmpty()
  username: string;
}
