import { checkDate } from '../src/client/js/inputValidation';
//Simple test to ensure checkDate function is working as expected.
// This will not validate the user entry.
describe('Validation of departure date', () => {
    test('It should return false', () => {
    expect(checkDate(2020-10-22)).toBe(false);
    });
  });