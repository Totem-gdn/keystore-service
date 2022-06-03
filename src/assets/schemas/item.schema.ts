import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AssetOwner } from './utils/asset-owner';
import { IItem } from '../interfaces/item.interface';

export type ItemDocument = Item & Document;

@Schema({
  autoCreate: true,
  collection: 'items',
  id: true,
  timestamps: true,
})
export class Item extends AssetOwner {
  @Prop({ required: true, index: true })
  itemType: string;

  @Prop({ required: true, type: Object })
  item: IItem;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
