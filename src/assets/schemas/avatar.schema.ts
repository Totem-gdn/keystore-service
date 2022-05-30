import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AssetOwner } from './utils/asset-owner';

export type AvatarDocument = Avatar & Document;

@Schema({
  autoCreate: true,
  collection: 'avatars',
  id: true,
  timestamps: true,
})
export class Avatar extends AssetOwner {
  // @Prop({ required: true, unique: true })
  // publicKey: string;

  // @Prop({ required: true, unique: true })
  // privateKey: string;

  @Prop({ required: true })
  avatar: string;
}

export const AvatarSchema = SchemaFactory.createForClass(Avatar);
