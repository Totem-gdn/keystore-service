import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class ProviderProfileDto {
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
