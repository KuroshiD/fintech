import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  describe('getHello', () => {
    it('should return "Hello world" (happy path)', () => {
      jest.spyOn(appService, 'getHello').mockReturnValue('Hello world');

      expect(appController.getHello()).toBe('Hello world');
      expect(appService.getHello).toHaveBeenCalled();
    });

    it('should handle unexpected behavior (unhappy path)', () => {
      jest.spyOn(appService, 'getHello').mockImplementation(() => {
        throw new Error('Unexpected error');
      });

      expect(() => appController.getHello()).toThrow('Unexpected error');
      expect(appService.getHello).toHaveBeenCalled();
    });
  });
});