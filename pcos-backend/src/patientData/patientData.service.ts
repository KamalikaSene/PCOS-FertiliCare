import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PatientData } from './patientData.schema';
import { CreatePatientDataDto } from './create-patientData.dto';

@Injectable()
export class PatientDataService {
  constructor(
    @InjectModel(PatientData.name)
    private PatientDataModel: Model<PatientData>,
  ) {}

  async create(
    createPatientDataDto: CreatePatientDataDto,
  ): Promise<PatientData> {
    const createdPatientData = new this.PatientDataModel(createPatientDataDto);
    return createdPatientData.save();
  }
}
