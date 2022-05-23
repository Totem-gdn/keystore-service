import { Injectable, Logger } from '@nestjs/common';
import { ProviderProfile, PublicKey, User } from './interfaces/user-service.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provider, User as UserSchema, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserSchema.name) private readonly userModel: Model<UserDocument>) {}

  async findOneOrCreate(profile: ProviderProfile): Promise<User> {
    try {
      const user = await this.userModel.findOne({ username: profile.username }).exec();
      if (user) {
        if (!user.auth.includes(profile)) {
          await user.updateOne({ $addToSet: { auth: [profile] } }).exec();
        }
        return { id: user.id };
      } else {
        return await this.createUser(profile);
      }
    } catch (e) {
      Logger.error(e);
      throw e;
    }
  }

  async getPublicKey(_user: User): Promise<PublicKey> {
    return { publicKey: '' };
  }

  private async createUser({ id, provider, username }: ProviderProfile): Promise<User> {
    const privateKey = '';

    const user = await this.userModel.create({
      username,
      privateKey,
      auth: [{ id, provider, username }],
    });

    return { id: user.id };
  }
}
