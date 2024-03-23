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

  async findLast(): Promise<PredictionResult | null> {
    return this.PredictionResultModel.findOne().sort({ _id: -1 }); // Get the document with the highest ID (latest)
  }

  async findOne(id: string): Promise<PredictionResult | null> {
    return this.PredictionResultModel.findById(id).exec();
  }

  async deleteLastRecord(): Promise<PredictionResult | null> {
    return await this.PredictionResultModel.findOneAndDelete(
      {},
      { sort: { _id: -1 } },
    );
  }
}
