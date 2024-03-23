import { Controller, Post, Body, Res } from '@nestjs/common';
import { PatientDataService } from './patientData.service';
import { CreatePatientDataDto } from './create-patientData.dto';
import { Response } from 'express';
import axios from 'axios';

@Controller('api')
export class PatientDataController {
  constructor(private readonly patientDataService: PatientDataService) {}

  @Post('patientData')
  async create(
    @Body() createPatientDataDto: CreatePatientDataDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      await this.patientDataService.create(createPatientDataDto);
      await axios.post('http://localhost:5000/predict', createPatientDataDto);

      return res
        .status(200)
        .json({ msg: ['Message sent successfully'], success: true });
    } catch (error) {
      console.error('Error creating contact:', error);
      if (error.code !== 11000) {
        return res.status(500).json({
          msg: ['Unable to send message.', error.message],
          success: false,
        });
      } else {
        return res
          .status(200)
          .json({ msg: ['Message sent successfully'], success: true });
      }
    }
  }
}
