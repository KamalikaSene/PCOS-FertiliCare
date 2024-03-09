import { Test, TestingModule } from '@nestjs/testing';
import { RiskPredictionServiceController } from './risk-prediction-service.controller';

describe('RiskPredictionServiceController', () => {
  let controller: RiskPredictionServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiskPredictionServiceController],
    }).compile();

    controller = module.get<RiskPredictionServiceController>(RiskPredictionServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
