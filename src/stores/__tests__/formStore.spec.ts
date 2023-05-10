import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useFormStore } from '../formStore';

const isinNumber = 'US1234567890';
describe('The user store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  
  it('state should have the same isinNumber as set', () => {
    const formStore = useFormStore();
    formStore.setISINNumber(isinNumber);
    const isinNumbers = formStore.getISINNumbers;
    expect(isinNumbers.includes(isinNumber)).toBeTruthy();
  })
});
