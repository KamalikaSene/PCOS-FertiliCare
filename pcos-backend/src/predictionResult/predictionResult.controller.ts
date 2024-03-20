import { Controller, Post, Body, Res } from '@nestjs/common';
import { PredictionResultService } from './predictionResult.service';
import { CreatePredictionResultDto } from './create-predictionResult.dto';
import { Response } from 'express';

@Controller('api')
export class PredictionResultController {
  constructor(
    private readonly PredictionResultService: PredictionResultService,
  ) {}

  @Post('prediction')
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

// import { Controller, Post, Body } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Data } from './data.model';

// @Controller('data')
// export class DataController {
//   constructor(@InjectModel('Data') private readonly dataModel: Model<Data>) {}

//   @Post()
//   async storeData(@Body() formData: any): Promise<any> {
//     try {
//       const newData = new this.dataModel(formData);
//       await newData.save();
//       return { message: 'Data stored successfully' };
//     } catch (error) {
//       return { error: 'Failed to store data' };
//     }
//   }
// }
