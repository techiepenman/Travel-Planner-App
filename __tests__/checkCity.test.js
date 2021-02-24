import { checkCity } from '../src/client/js/inputValidation';
//Simple test to ensure checkCity function is working as expected.
// This will not validate the user entry.
describe('Validation of city', () => {
    test('It should return true', () => {
    const city = 'Minneapolis';
      expect(checkCity(city)).toBe(true);
    });
  });



  

