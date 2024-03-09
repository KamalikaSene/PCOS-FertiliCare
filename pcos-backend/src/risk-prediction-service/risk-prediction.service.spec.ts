import { Test, TestingModule } from '@nestjs/testing';
import { RiskPredictionService } from './risk-prediction.service';

describe('RiskPredictionService', () => {
  let service: RiskPredictionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiskPredictionService],
    }).compile();

    service = module.get<RiskPredictionService>(RiskPredictionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
