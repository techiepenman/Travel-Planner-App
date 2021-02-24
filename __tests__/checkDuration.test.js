import { checkDuration } from '../src/client/js/inputValidation';
//Simple test to ensure checkDuration function is working as expected.
// This will not validate the user entry.
describe('Validation of duration of trip', () => {
    test('It should return false', () => {
    expect(checkDuration( 2020-12-12 , 2021-10-10 )).toBe(true);
    });
  });