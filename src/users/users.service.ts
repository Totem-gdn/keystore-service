import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ethers } from 'ethers';
import { User, UserDocument } from './schemas/user.schema';
import { ProviderProfileDto } from './dto/provider-profile.dto';
import { UserDto } from './dto/user.dto';
import { PublicKeyDto } from './dto/public-key.dto';
import { AssetsService } from '../assets/assets.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly assetsService: AssetsService,
  ) {}

  async findOrCreate(profile: ProviderProfileDto): Promise<UserDto> {
    let user = await this.userModel.findOne({ username: profile.username }).exec();
    if (user) {
      if (!user.auth.includes(profile)) {
        await user.updateOne({ $addToSet: { auth: profile } }).exec();
      }
      return { id: user.id };
    } else {
      // TODO: temporary private key generation
      const wallet = ethers.Wallet.createRandom();
      user = await this.userModel.create({
        username: profile.username,
        publicKey: wallet.publicKey,
        privateKey: wallet.privateKey,
        auth: [profile],
      });
      // create random avatar and 5 random items
      await this.assetsService.generateAvatar({ id: user.id });
      await this.assetsService.generateItem({ id: user.id });
      await this.assetsService.generateItem({ id: user.id });
      await this.assetsService.generateItem({ id: user.id });
      await this.assetsService.generateItem({ id: user.id });
      await this.assetsService.generateItem({ id: user.id });
    }
    return { id: user.id };
  }

  async getPublicKey(user: UserDto): Promise<PublicKeyDto> {
    const { publicKey } = await this.userModel.findById(user.id).exec();
    return { publicKey };
  }
}
