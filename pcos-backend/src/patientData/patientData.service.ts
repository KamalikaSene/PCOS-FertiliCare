import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PatientData } from './patientData.schema';

@Injectable()
export class PatientDataService {
  constructor(
    @InjectModel(PatientData.name)
    private PatientDataModel: Model<PatientData>,
  ) {}
}
