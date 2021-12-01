import Vuex from 'vuex';
import createStore from '../store';

export default (Vue) => {
  Vue.use(Vuex);

  const store = createStore();
  return {
    store,
  };
};
