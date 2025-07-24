import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LandingPageDocument = LandingPage & Document;

@Schema()
export class LandingPage {
  @Prop({ required: true })
  organizationName: string;

  @Prop({ required: true })
  about: string;

  @Prop({ required: true })
  history: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  createdAt: Date;
}

export const LandingPageSchema = SchemaFactory.createForClass(LandingPage);
