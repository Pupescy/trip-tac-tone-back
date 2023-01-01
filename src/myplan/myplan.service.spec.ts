import { Test, TestingModule } from '@nestjs/testing';
import { MyplanService } from './myplan.service';

describe('MyplanService', () => {
  let service: MyplanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyplanService],
    }).compile();

    service = module.get<MyplanService>(MyplanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
