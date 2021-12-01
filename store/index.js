import Vuex from 'vuex';

const sidebar = {
  namespaced: true,
  state: () => {
    return {
      shouldClose: [], // ['sitemap','references','smcp']
      opened: {
        sitemap: false,
        references: false,
        smpc: false,
        studyDesign: false,
      },
    };
  },
  mutations: {
    setOpened(state, payload) { // {key:'sitemap',value: true}
      state.opened[payload.key] = payload.value;
    },
    setShouldClose(state, payload) { // {key:'sitemap',value: true}
      state.shouldClose = payload;
    },
  },
  actions: {
    changeOpened({ commit, state }, componentState) { // {key:'sitemap',value: true}
      if (Object.prototype.hasOwnProperty.call(state.opened, componentState.key)) { // check if component exists
        if (componentState.value === true) { // if opening component, check what components need to be closed
          let openedComponents = Object.keys(state.opened).filter((component) => { return state.opened[component] === true; });
          openedComponents = openedComponents.filter((component) => { return component !== componentState.key; });
          commit('setShouldClose', openedComponents);
          commit('setOpened', componentState);
        } else { // if closing component, remove current component from the shouldClose list
          const shouldClose = state.shouldClose.filter((component) => { return component !== componentState.key; });
          commit('setShouldClose', shouldClose);
          commit('setOpened', componentState);
        }
      }
    },
  },
  getters: {},
};

// const state = {
//   namespaced: true,
//   state: () => ({}),
//   mutations: {},
//   actions: {}
// }

export default () => {
  return new Vuex.Store({
    modules: {
      sidebar,
    },
  });
};
