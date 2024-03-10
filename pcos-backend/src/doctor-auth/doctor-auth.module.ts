// doctor-auth.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorAuthService } from './doctor-auth/doctor-auth.service';
import { DoctorAuthSchema } from './doctor-auth/doctor-auth.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorAuthSchema }])
  ],
  providers: [DoctorAuthService],
  exports: [DoctorAuthService],
})
export class DoctorAuthModule {}
