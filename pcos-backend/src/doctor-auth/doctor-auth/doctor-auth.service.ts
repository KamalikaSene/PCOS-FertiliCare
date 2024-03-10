import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DoctorAuthDto } from './doctor-auth.dto';

@Injectable()
export class DoctorAuthService {
  constructor(@InjectModel('Doctor') private readonly doctorModel: Model<any>) {}

  async authenticateDoctor(registrationNumber: string): Promise<boolean> {
    const doctor = await this.doctorModel.findOne({ registrationNumber }).exec();
    return !!doctor;
  }
}
