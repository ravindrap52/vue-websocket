import { describe, expect, it } from 'vitest';
import { formValidation } from '../formValidation';

describe('formValidation', () => {
  it('should check for string empty', () => {
    const { error } = formValidation({fieldName: 'isinNumber', fieldValue: ''});
    expect(error.message).toEqual('The isinNumber is required');
  });
  it('should check for min length', () => {
    const { error } = formValidation({fieldName: 'isinNumber', fieldValue: 'testString'});
    expect(error.message).toEqual('The isinNumber should be minimum 12 characters');
  });

  it('should validate ISINNumber', () => {
    const { error } = formValidation({fieldName: 'isinNumber', fieldValue: 'US1234567890'});
    expect(error.message).toEqual('Not a valid ISINNumber');
  });
  it('should set to form valid to true and error message to empty', () => {
    const { error, isFormValid } = formValidation({fieldName: 'isinNumber', fieldValue: '1234567890'});
    expect(error.message).toEqual('');
    expect(isFormValid).toBeTruthy;
  })
});
