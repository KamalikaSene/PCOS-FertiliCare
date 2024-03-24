import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { PredictionResultService } from './predictionResult.service';
import { CreatePredictionResultDto } from './create-predictionResult.dto';
import { Response } from 'express';

@Controller('api')
export class PredictionResultController {
  constructor(
    private readonly predictionResultService: PredictionResultService,
  ) {}

  @Post('prediction')
  async create(
    @Body() createPredictionResultDto: CreatePredictionResultDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      await this.predictionResultService.create(createPredictionResultDto);
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

  @Get('viewresult')
  async getLastRecord(@Res() res: Response): Promise<any> {
    try {
      const lastRecord = await this.predictionResultService.findLast();
      if (!lastRecord) {
        throw new NotFoundException('No records found');
      }
      return res
        .status(HttpStatus.OK)
        .json({ risk_level: lastRecord.risk_level, record_id: lastRecord._id });
    } catch (error) {
      if (error instanceof NotFoundException) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ msg: 'No records found' });
      }
      console.error('Error fetching last record:', error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ msg: 'Error fetching data' });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<any> {
    try {
      const pastResult = await this.predictionResultService.findOne(id);

      if (!pastResult) {
        throw new NotFoundException('Past risk level prediction not found');
      }

      const { risk_level } = pastResult;
      return res.status(200).json({ risk_level });
    } catch (error) {
      console.error('Error retrieving past risk level prediction:', error);
      if (error instanceof NotFoundException) {
        return res.status(404).json({ msg: error.message, success: false });
      } else {
        return res.status(500).json({
          msg: [
            'Unable to retrieve past risk level prediction.',
            error.message,
          ],
          success: false,
        });
      }
    }
  }

  @Post('deleteresult')
  async deleteLastRecord(): Promise<any> {
    try {
      const deletedRecord =
        await this.predictionResultService.deleteLastRecord();
      if (!deletedRecord) {
        throw new HttpException(
          'No record found to delete',
          HttpStatus.NOT_FOUND,
        );
      }
      return { message: 'Last record deleted successfully' };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
