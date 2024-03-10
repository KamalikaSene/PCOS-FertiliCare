// example.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { DoctorAuthService } from './doctor-auth.service';
import { DoctorAuthDto } from './doctor-auth.dto';

@Controller('example')
export class ExampleController {
  constructor(private readonly doctorAuthService: DoctorAuthService) {}

  @Post('authenticate-doctor')
  async authenticateDoctor(@Body() body: DoctorAuthDto): Promise<boolean> {
    return this.doctorAuthService.authenticateDoctor(body.registrationNumber);
  }
}
