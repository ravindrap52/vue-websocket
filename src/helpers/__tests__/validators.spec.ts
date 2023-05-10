import { describe, expect, it } from 'vitest';
import { isStringEmpty, minLength, isValidISINNumber } from '../validators';

describe('validators', () => {
  it('should return true if the string is empty', () => {
    const result = isStringEmpty('');
    expect(result).toBeTruthy();
  });
  it('should return false if the string is not empty', () => {
    const result = isStringEmpty('test');
    expect(result).toBeFalsy();
  });
  it('should return true if the string length less than the minumum value', () => {
    const result = minLength('tes', 4);
    expect(result).toBeTruthy();
  });
  it('should return false if the string length is greater than the minimun value', () => {
    const result = minLength('test', 3);
    expect(result).toBeFalsy();
  });
  it('should return true if the regex pattern matches', () => {
    const result = isValidISINNumber('US1234567890');
    expect(result).toBeTruthy();
  });
  it('should return false if the regex pattern not matched', () => {
    const result = isStringEmpty('USE12345678');
    expect(result).toBeFalsy();
  });
});
