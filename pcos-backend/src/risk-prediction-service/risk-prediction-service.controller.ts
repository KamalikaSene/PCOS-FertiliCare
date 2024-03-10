import { Body, Controller, Post } from '@nestjs/common';
import { RiskPredictionService } from './risk-prediction.service';

@Controller('predict')
export class PredictionController {
  constructor(private readonly riskPredictionService: RiskPredictionService) {}

  @Post()
  async predictInfertilityRisk(@Body() patientData: any): Promise<string> {
    const prediction =
      await this.riskPredictionService.predictInfertilityRisk(patientData);
    return prediction;
  }
}
