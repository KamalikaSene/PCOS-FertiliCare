import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PredictionResultDocument = HydratedDocument<PredictionResult>;

@Schema()
export class PredictionResult {
  @Prop()
  bmi: number;

  @Prop()
  fsh_lh: number;

  @Prop()
  prl_ng_ml: number;

  @Prop()
  cycle_value: number;

  @Prop()
  prediction: string;
}

export const PredictionResultSchema =
  SchemaFactory.createForClass(PredictionResult);
