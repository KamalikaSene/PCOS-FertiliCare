import { Test, TestingModule } from '@nestjs/testing';
import { DoctorAuthService } from './doctor-auth.service';

describe('DoctorAuthService', () => {
  let service: DoctorAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorAuthService],
    }).compile();

    service = module.get<DoctorAuthService>(DoctorAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
