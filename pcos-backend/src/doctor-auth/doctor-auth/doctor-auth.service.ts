import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DoctorAuth } from './doctor-auth.schema';
import { DoctorAuthDto } from './doctor-auth.dto';

@Injectable()
export class DoctorAuthService {
  constructor(@InjectModel(DoctorAuth.name) private readonly doctorModel: Model<DoctorAuth>) {}

  async authenticateDoctor(registrationNumber: number): Promise<boolean> {
    const doctor = await this.doctorModel.findOne({ registrationNumber }).exec();
    console.log(doctor)
    
    return !!doctor;
  }
}
