import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientDataController } from './patientData.controller';
import { PatientDataService } from './patientData.service';
import { PatientData, PatientDataSchema } from './patientData.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PatientData.name, schema: PatientDataSchema },
    ]),
  ],
  controllers: [PatientDataController],
  providers: [PatientDataService],
})
export class PatientDataModule {}

export { PatientData };
