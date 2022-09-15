import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Avatar, AvatarDocument } from './schemas/avatar.schema';
import { Item, ItemDocument } from './schemas/item.schema';
import { AvatarEntity } from './entities/avatar.entity';
import { ItemEntity } from './entities/item.entity';
import { OwnerDto } from '../users/dto/owner.dto';
import { avatars } from './entities/__mocks__/avatars';
import { items } from './entities/__mocks__/items';
import { ColorUtils } from './lib/color-utils';

@Injectable()
export class AssetsService {
  private readonly avatars: IterableIterator<AvatarEntity>;
  private readonly items: IterableIterator<ItemEntity>;

  constructor(
    @InjectModel(Avatar.name) private readonly avatarModel: Model<AvatarDocument>,
    @InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>,
  ) {
    this.avatars = AssetsService.avatarsGenerator();
    this.items = AssetsService.itemsGenerator();
  }

  private static *avatarsGenerator(): IterableIterator<AvatarEntity> {
    while (true) {
      for (const idx in avatars) {
        yield new AvatarEntity({ ...avatars[idx], clothingColor: ColorUtils.randomHex() });
      }
    }
  }

  private static *itemsGenerator(): IterableIterator<ItemEntity> {
    while (true) {
      for (const idx in items) {
        yield new ItemEntity({ ...items[idx] });
      }
    }
  }

  async generateAvatar(owner: OwnerDto): Promise<void> {
    const avatarEntity = this.avatars.next().value;
    await this.avatarModel.create({
      owner: owner.publicKey,
      owners: [owner.publicKey],
      avatar: avatarEntity.schemaValues,
    });
  }

  async generateItem(owner: OwnerDto): Promise<void> {
    const itemEntity = this.items.next().value;
    await this.itemModel.create({
      owner: owner.publicKey,
      owners: [owner.publicKey],
      itemType: itemEntity.itemType,
      item: itemEntity.schemaValues,
    });
  }
}
