import { Module } from '@nestjs/common';
import { RiskPredictionServiceController } from './risk-prediction-service.controller';
import { RiskPredictionService } from './risk-prediction.service';

@Module({
  controllers: [RiskPredictionServiceController],
  providers: [RiskPredictionService],
})
export class RiskPredictionServiceModule {}
