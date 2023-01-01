import { Test, TestingModule } from '@nestjs/testing';
import { MyplanController } from './myplan.controller';

describe('MyplanController', () => {
  let controller: MyplanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyplanController],
    }).compile();

    controller = module.get<MyplanController>(MyplanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
