import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ethers } from 'ethers';
import { SocialProfile, SocialProfileDocument } from './schemas/social-profile.schema';
import { User, UserDocument } from './schemas/user.schema';
import { ProviderProfileDto } from './dto/provider-profile.dto';
import { UserDto } from './dto/user.dto';
import { PublicKeyDto } from './dto/public-key.dto';
import { AssetsService } from '../assets/assets.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(SocialProfile.name) private readonly socialProfileModel: Model<SocialProfileDocument>,
    private readonly assetsService: AssetsService,
  ) {}

  async findOrCreate(profile: ProviderProfileDto): Promise<UserDto> {
    const profileId = `${profile.provider}-${profile.id}`;
    const socialProfile = await this.socialProfileModel.findOne({ id: profileId }).exec();
    if (socialProfile) {
      const { id } = await this.userModel.findById(socialProfile.userId).exec();
      return { id };
    } else {
      // TODO: temporary private key generation
      const wallet = ethers.Wallet.createRandom();
      const user = await this.userModel.create({
        publicKey: wallet.publicKey,
        privateKey: wallet.privateKey,
      });
      // create random avatar and 5 random items
      await this.assetsService.generateAvatar({ publicKey: user.publicKey });
      await this.assetsService.generateItem({ publicKey: user.publicKey });
      await this.assetsService.generateItem({ publicKey: user.publicKey });
      await this.assetsService.generateItem({ publicKey: user.publicKey });
      await this.assetsService.generateItem({ publicKey: user.publicKey });
      await this.assetsService.generateItem({ publicKey: user.publicKey });
      // create social profile record
      await this.socialProfileModel.create({
        id: profileId,
        provider: profile.provider,
        userId: user.id,
      });
      return { id: user.id };
    }
  }

  async getPublicKey(user: UserDto): Promise<PublicKeyDto> {
    const { publicKey } = await this.userModel.findById(user.id).exec();
    return { publicKey };
  }
}
