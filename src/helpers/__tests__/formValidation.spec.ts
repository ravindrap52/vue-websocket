import { describe, expect, it } from 'vitest';
import { formValidation } from '../formValidation';

describe('formValidation', () => {
  it('should check for string empty', () => {
    const { error, validateTextField } = formValidation();
    validateTextField('isinNumber', '');
    expect(error.message).toEqual('The isinNumber is required');
  });
  it('should check for min length', () => {
    const { error, validateTextField } = formValidation();
    validateTextField('isinNumber', 'testString');
    expect(error.message).toEqual('The isinNumber should be minimum 12 characters');
  });

  it('should validate ISINNumber', () => {
    const { error, validateTextField } = formValidation();
    validateTextField('isinNumber', 'USD1234567890');
    expect(error.message).toEqual('Not a valid ISINNumber');
  });
  it('should set to form valid to true and error message to empty', () => {
    const { error } = formValidation();
    expect(error.message).toEqual('');
    expect(error.isFormValid).toBeTruthy;
  })
});
