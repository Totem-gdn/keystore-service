import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type SocialProfileDocument = SocialProfile & Document;

@Schema({
  autoCreate: true,
  collection: 'socialProfile',
  id: true,
  timestamps: true,
})
export class SocialProfile {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  provider: string;

  @Prop({ required: true, type: SchemaTypes.ObjectId })
  userId: string;
}

export const SocialProfileSchema = SchemaFactory.createForClass(SocialProfile);
