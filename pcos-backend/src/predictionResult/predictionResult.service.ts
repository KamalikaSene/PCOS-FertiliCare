import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PredictionResult } from './predictionResult.schema';
import { CreatePredictionResultDto } from './create-predictionResult.dto';

@Injectable()
export class PredictionResultService {
  constructor(
    @InjectModel(PredictionResult.name)
    private PredictionResultModel: Model<PredictionResult>,
  ) {}

  async create(
    createPredictionResultDto: CreatePredictionResultDto,
  ): Promise<PredictionResult> {
    const createdPredictionResult = new this.PredictionResultModel(
      createPredictionResultDto,
    );
    return createdPredictionResult.save();
  }

  async findAll(): Promise<PredictionResult[]> {
    return this.PredictionResultModel.find().exec();
  }
}
