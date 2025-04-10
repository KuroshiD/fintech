import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  describe('getHello', () => {
    it('should return "Hello world" (happy path)', () => {
      expect(service.getHello()).toBe('Hello world');
    });

    it('should handle unexpected behavior (unhappy path)', () => {
      // Simulando um cenário onde o método é alterado inesperadamente
      jest.spyOn(service, 'getHello').mockImplementation(() => {
        throw new Error('Unexpected error');
      });

      expect(() => service.getHello()).toThrow('Unexpected error');
    });
  });
});