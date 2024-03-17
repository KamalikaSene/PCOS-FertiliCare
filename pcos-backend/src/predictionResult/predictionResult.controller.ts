import { Controller, Post, Body, Res } from '@nestjs/common';
import { PredictionResultService } from './predictionResult.service';
import { CreatePredictionResultDto } from './create-predictionResult.dto';
import { Response } from 'express';

@Controller('api')
export class PredictionResultController {
  constructor(
    private readonly PredictionResultService: PredictionResultService,
  ) {}

  @Post('contact')
  async create(
    @Body() createPredictionResultDto: CreatePredictionResultDto,
    @Res() res: Response,

  ): Promise<any> {
    try {
      await this.PredictionResultService.create(createPredictionResultDto);
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
}