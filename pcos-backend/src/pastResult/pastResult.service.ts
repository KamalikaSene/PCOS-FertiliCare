import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PastResult } from './pastResult.schema';
import { CreatePastResultDto } from './create-pastResults.dto';

@Injectable()
export class PastResultService {
  constructor(
    @InjectModel(PastResult.name)
    private PastResultModel: Model<PastResult>,
  ) {}

  async create(
    createPastResultDto: CreatePastResultDto,
  ): Promise<PastResult> {
    const createdPastResult = new this.PastResultModel(
      createPastResultDto,
    );
    return createdPastResult.save();
  }

  async findAll(): Promise<PastResult[]> {
    return this.PastResultModel.find().exec();
  }
}