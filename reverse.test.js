import {Reverse} from './reverse';

describe("reverse function test", ()=>{
    it("empty string", () => {
      expect(Reverse('')).toBe('Строка пуста');
    }),
      it("normal string", () => {
        expect(Reverse('123456')).toBe('654321');
      }),
        it("short string", () => {
          expect(Reverse('1')).toBe('1');
        })
    
  });