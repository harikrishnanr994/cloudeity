import Vue from 'vue';
import Services from '@/components/Services';

describe('Services.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Services);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent).toBe('Services');
  });
});
