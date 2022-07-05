import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  autoCreate: true,
  collection: 'users',
  id: true,
  timestamps: true,
})
export class User {
  @Prop({ required: true, unique: true })
  publicKey: string;

  @Prop({ required: true, unique: true })
  privateKey: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
