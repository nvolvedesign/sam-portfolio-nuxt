import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      pageTitle: ""
    },
    mutations: {
      setPageTitle(state, pageTitle) {
        state.pageTitle = pageTitle;
      }
    }
  });
};

export default createStore;
