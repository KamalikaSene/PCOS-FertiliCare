import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PatientDataDocument = HydratedDocument<PatientData>;

@Schema()
export class PatientData {
  @Prop()
  bmi: number;

  @Prop()
  fsh_lh: number;

  @Prop()
  prl_ng_ml: number;

  @Prop()
  cycle_value: number;
}

export const PatientDataSchema = SchemaFactory.createForClass(PatientData);
