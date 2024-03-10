import { Module } from '@nestjs/common';
import { PredictionController } from './risk-prediction-service.controller';
import { RiskPredictionService } from './risk-prediction.service';

@Module({
  controllers: [PredictionController],
  providers: [RiskPredictionService],
})
export class RiskPredictionServiceModule {}
