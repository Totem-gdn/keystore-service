import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AssetOwner } from './utils/asset-owner';
import { IAvatar } from '../interfaces/avatar.interface';

export type AvatarDocument = Avatar & Document;

@Schema({
  autoCreate: true,
  collection: 'avatars',
  id: true,
  timestamps: true,
})
export class Avatar extends AssetOwner {
  @Prop({ required: true, type: Object })
  avatar: IAvatar;
}

export const AvatarSchema = SchemaFactory.createForClass(Avatar);
