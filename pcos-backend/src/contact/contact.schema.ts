import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contact>; 
@Schema()
export class Contact{
  @Prop({ required: true, trim: true })
  pcos: number;

  @Prop({ required: true, trim: true })
  age: number;

  @Prop({ required: true, trim: true })
  weight: number;

  @Prop({ required: true, trim: true })
  height: number;

  @Prop({ required: true, trim: true })
  bmi: number;

  @Prop({ required: true, trim: true })
  cycle: number;

  @Prop({ required: true, trim: true })
  pregnant: number;

  @Prop({ required: true, trim: true })
  abortion: number;

  @Prop({ required: true, trim: true })
  fsh: number;

  @Prop({ required: true, trim: true })
  lh: number;

  @Prop({ required: true, trim: true })
  fshLhRatio: number;

  @Prop({ required: true, trim: true })
  prolactin: number;

  @Prop({ required: true, trim: true })
  weightgain: number;

  @Prop({ required: true, trim: true })
  fastfood: number;

  @Prop({ required: true, trim: true })
  exercise: number;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);