import { Controller, Post, Body } from '@nestjs/common';
import { PatientDataService } from './patientData.service';
import { CreatePatientDataDto } from './create-patientData.dto';
import axios from 'axios';

@Controller('api')
export class PatientDataController {
  constructor(private readonly patientDataService: PatientDataService) {}

  @Post('patientData')
  async create(
    @Body() createPatientDataDto: CreatePatientDataDto,
  ): Promise<any> {
    await axios.post('http://localhost:5000/predict', createPatientDataDto);
  }
}
