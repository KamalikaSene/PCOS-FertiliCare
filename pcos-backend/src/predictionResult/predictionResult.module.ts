import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PredictionResultController } from './predictionResult.controller';
import { PredictionResultService } from './predictionResult.service';

import {
  PredictionResult,
  PredictionResultSchema,
} from './predictionResult.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PredictionResult.name, schema: PredictionResultSchema },
    ]),
  ],
  controllers: [PredictionResultController],
  providers: [PredictionResultService],
})
export class PredictionResultModule {}
