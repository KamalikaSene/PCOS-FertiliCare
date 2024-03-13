// doctor-auth.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorAuthService } from './doctor-auth/doctor-auth.service';
import { DoctorAuth,DoctorAuthSchema } from './doctor-auth/doctor-auth.schema';
import { ExampleController } from './doctor-auth/example.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DoctorAuth.name, schema: DoctorAuthSchema }])
  ],
  controllers:[ExampleController],
  providers: [DoctorAuthService],
  exports: [DoctorAuthService],
})
export class DoctorAuthModule {}
