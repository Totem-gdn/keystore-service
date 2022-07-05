import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { AssetsModule } from '../assets/assets.module';
import { SocialProfile, SocialProfileSchema } from './schemas/social-profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: SocialProfile.name, schema: SocialProfileSchema },
    ]),
    AssetsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
