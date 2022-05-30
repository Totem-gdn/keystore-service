import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from '../users/dto/user.dto';
import { Avatar, AvatarDocument } from './schemas/avatar.schema';
import { Item, ItemDocument } from './schemas/item.schema';
import { AvatarEntity } from './entities/avatar.entity';
import { ItemEntity } from './entities/item.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectModel(Avatar.name) private readonly avatarModel: Model<AvatarDocument>,
    @InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>,
  ) {}

  async generateAvatar(user: UserDto): Promise<void> {
    const avatarEntity = new AvatarEntity();
    await this.avatarModel.create({
      owner: user.id,
      owners: [user.id],
      avatar: avatarEntity.toString(),
    });
  }

  async generateItem(user: UserDto): Promise<void> {
    const itemEntity = new ItemEntity();
    await this.itemModel.create({
      owner: user.id,
      owners: [user.id],
      itemType: itemEntity.itemType,
      item: itemEntity.toString(),
    });
  }
}
