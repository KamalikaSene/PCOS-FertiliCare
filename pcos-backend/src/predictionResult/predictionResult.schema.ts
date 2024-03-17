import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PredictionResultDocument = HydratedDocument<PredictionResult>;

@Schema()
export class PredictionResult {
  @Prop()
  prediction: string;
}

export const PredictionResultSchema =
  SchemaFactory.createForClass(PredictionResult);
