import { Body, Controller, Post } from '@nestjs/common';
import { RiskPredictionService } from './risk-prediction.service';

@Controller('risk-prediction-service')
export class RiskPredictionServiceController {
  constructor(private readonly riskPredictionService: RiskPredictionService) {}

  @Post()
  async predictRisk(@Body() inputData: any): Promise<any> {
    try {
      const prediction =
        await this.riskPredictionService.predictRisk(inputData);
      return { prediction };
    } catch (error) {
      console.log(error);
    }
  }
}
