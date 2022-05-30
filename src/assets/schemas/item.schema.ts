import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AssetOwner } from './utils/asset-owner';

export type ItemDocument = Item & Document;

@Schema({
  autoCreate: true,
  collection: 'items',
  id: true,
  timestamps: true,
})
export class Item extends AssetOwner {
  // @Prop({ required: true, unique: true })
  // publicKey: string;

  // @Prop({ required: true, unique: true })
  // privateKey: string;

  @Prop({ required: true, index: true })
  itemType: string;

  @Prop({ required: true })
  item: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
