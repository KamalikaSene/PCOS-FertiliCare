import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { PatientDataService } from './patientData.service';
import { CreatePatientDataDto } from './create-patientData.dto';
import { Response } from 'express';
// import axios from 'axios';

@Controller('api')
export class PatientDataController {
  constructor(private readonly PatientDataService: PatientDataService) {}

  @Post('patientData')
  async create(
    @Body() createPatientDataDto: CreatePatientDataDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      await this.PatientDataService.create(createPatientDataDto);
      // const predictResponse = await axios.post(
      //   'http://127.0.0.1:5000',
      //   createPatientDataDto,
      // );

      // Handle the response from the Flask server if needed
      // console.log('Prediction from Flask server:', predictResponse.data);

      return res
        .status(200)
        .json({ msg: ['Message sent successfully'], success: true });
    } catch (error) {
      // Handle any errors other than the duplicate email error
      console.error('Error creating contact:', error);
      if (error.code !== 11000) {
        return res.status(500).json({
          msg: ['Unable to send message.', error.message],
          success: false,
        });
      } else {
        // No need to handle the duplicate email error, as we're allowing duplicates
        // Proceed with successful response
        return res
          .status(200)
          .json({ msg: ['Message sent successfully'], success: true });
      }
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return `This action returns a #${id} cat`;
  // }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<any> {
    try {
      const patientData = await this.PatientDataService.findOne(id);

      if (!patientData) {
        throw new NotFoundException('Patient data not found');
      }

      const { bmi, fsh_lh, prl_ng_ml, cycle_value } = patientData;
      return res.status(200).json({ bmi, fsh_lh, prl_ng_ml, cycle_value });
    } catch (error) {
      console.error('Error retrieving patient data:', error);
      if (error instanceof NotFoundException) {
        return res.status(404).json({ msg: error.message, success: false });
      } else {
        return res.status(500).json({
          msg: ['Unable to retrieve patient data.', error.message],
          success: false,
        });
      }
    }
  }
}

// @Post('predict') // Endpoint to call Flask predict
// async predict(@Body() data: any, @Res() res: Response): Promise<any> {
//   try {
//     // Assuming 'data' is the payload you want to send to Flask
//     const flaskResponse = await axios.post('FLASK_ENDPOINT_URL/predict', data);
//     return res.status(200).json(flaskResponse.data); // Returning Flask response
//   } catch (error) {
//     console.error('Error calling predict endpoint:', error);
//     return res.status(500).json({
//       msg: ['Unable to make prediction.', error.message],
//       success: false,
//     });
//   }
// }
