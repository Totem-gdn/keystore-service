import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Avatar, AvatarDocument } from './schemas/avatar.schema';
import { Item, ItemDocument } from './schemas/item.schema';
import { AvatarEntity } from './entities/avatar.entity';
import { ItemEntity } from './entities/item.entity';
import { OwnerDto } from '../users/dto/owner.dto';

@Injectable()
export class AssetsService {
  constructor(
    @InjectModel(Avatar.name) private readonly avatarModel: Model<AvatarDocument>,
    @InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>,
  ) {}

  async generateAvatar(owner: OwnerDto): Promise<void> {
    const avatarEntity = new AvatarEntity();
    await this.avatarModel.create({
      owner: owner.publicKey,
      owners: [owner.publicKey],
      avatar: avatarEntity.schemaValues,
    });
  }

  async generateItem(owner: OwnerDto): Promise<void> {
    const itemEntity = new ItemEntity();
    await this.itemModel.create({
      owner: owner.publicKey,
      owners: [owner.publicKey],
      itemType: itemEntity.itemType,
      item: itemEntity.schemaValues,
    });
  }
}
