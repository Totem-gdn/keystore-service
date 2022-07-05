import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class ProviderProfileDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['google', 'twitter', 'facebook', 'steam', 'itch-io'])
  provider: string;
}
