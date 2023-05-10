import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Header from '../Header.vue';

describe('Header', () => {
  it('Mounts properly', async () => {
    const wrapper = mount(Header);

    expect(wrapper).toBeTruthy();
    expect(wrapper.text()).toContain('Trade Republic');

    const svg = wrapper.find('svg');
    expect(svg).toBeTruthy();
  });
});
