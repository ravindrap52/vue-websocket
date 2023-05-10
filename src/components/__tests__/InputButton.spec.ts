import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import InputButton from '../InputButton.vue';

const mountTheComponent = () => {
  const wrapper = mount(InputButton, {
    propsData: {
      disable: true
    },
    slots: {
      default: 'Submit'
    }
  });
  return wrapper;
};

describe('InputButton', () => {
  it('should Mount properly with props', () => {
    expect(mountTheComponent()).toBeTruthy();
  });
  it('should test the content of the slot', () => {
    expect(mountTheComponent().html()).toContain('Submit');
  });
});
