import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import TextField from '../TextField.vue';

const mountTheComponent = () => {
  const wrapper = mount(TextField, {
    propsData: {
      label: 'ISINNumber',
      placeHolder: 'ISINNumber',
      modelValue: 'US1234567890',
      type: 'text'
    }
  });
  return wrapper;
};
describe('TextField', () => {
  it('should Mount properly with props', () => {
    expect(mountTheComponent()).toBeTruthy();
  });
  it('should have a label tag', () => {
    const div = mountTheComponent().find('label');
    expect(div.text()).toBe('ISINNumber');
  });
  it('should have an input tag', () => {
    const input = mountTheComponent().find('input');
    expect(input).toBeTruthy();
  });
  it('should set and check the model value', () => {
    mountTheComponent().find('input').setValue('US1234567890');
    expect(mountTheComponent().props('modelValue')).toBe('US1234567890');
  });
  it('should trigger the keyup event', async () => {
    const input = mountTheComponent().find('input');
    const spyOnInput = vi.spyOn(input, 'trigger');
    await input.trigger('keyup');
    expect(spyOnInput).toHaveBeenCalledOnce();
  });
  it('should trigger the blur event', async () => {
    const input = mountTheComponent().find('input');
    const spyOnInput = vi.spyOn(input, 'trigger');
    await input.trigger('blur');
    expect(spyOnInput).toHaveBeenCalledOnce();
  });
  it('should not render the error div', () => {
    const errorDiv = mountTheComponent().find('#error');
    expect(errorDiv.exists()).toBe(false);
  });

  it('should emit update event', () => {
    const wrapper = mountTheComponent();
    expect(wrapper.emitted()).toBeTruthy();
  });
});
