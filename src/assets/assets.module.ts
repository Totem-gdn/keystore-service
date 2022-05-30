import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Avatar, AvatarSchema } from './schemas/avatar.schema';
import { Item, ItemSchema } from './schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Avatar.name, schema: AvatarSchema },
      { name: Item.name, schema: ItemSchema },
    ]),
  ],
  providers: [AssetsService],
  exports: [AssetsService],
})
export class AssetsModule {}
