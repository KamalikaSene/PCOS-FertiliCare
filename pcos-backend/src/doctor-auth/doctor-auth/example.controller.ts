// example.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { DoctorAuthService } from './doctor-auth.service';
import { DoctorAuthDto } from './doctor-auth.dto';

@Controller('example')
export class ExampleController {
  constructor(private readonly doctorAuthService: DoctorAuthService) {}

  @Post('authenticate-doctor')
  async authenticateDoctor(@Body() dto: DoctorAuthDto): Promise<{ success: boolean }> {
    try {
      const isValid = await this.doctorAuthService.authenticateDoctor(dto);
      console.log('isValid:', isValid); // Log the isValid value
      return { success: isValid };
    } catch (error) {
      console.error('Error:', error); // Log any errors that occur
      return { success: false };
    }
  }
}
