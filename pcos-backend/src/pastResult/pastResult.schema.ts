import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PastResultDocument = HydratedDocument<PastResult>;

@Schema()
export class PastResult {
  @Prop()
  bmi: number;

  @Prop()
  fsh_lh: number;

  @Prop()
  prl_ng_ml: number;

  @Prop()
  cycle_value: number;

  @Prop()
  risk_level: string;
}

export const PastResultSchema =
  SchemaFactory.createForClass(PastResult);