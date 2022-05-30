import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export type Provider = {
  id: string;
  provider: string;
  username: string;
};

@Schema({
  autoCreate: true,
  collection: 'users',
  id: true,
  timestamps: true,
})
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  publicKey: string;

  // TODO: Must be encrypted
  @Prop({ required: true, unique: true })
  privateKey: string;

  @Prop({
    required: true,
    validate: (val: Provider[]) => val.length > 0,
  })
  auth: Provider[];
}

export const UserSchema = SchemaFactory.createForClass(User);
