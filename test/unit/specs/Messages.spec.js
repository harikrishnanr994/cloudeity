import Vue from 'vue';
import Messages from '@/components/Messages';

describe('Messages.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Messages);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent).toBe('Messages');
  });
});
