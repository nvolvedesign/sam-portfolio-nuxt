import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      pageTitle: "",
      mobileMenuOpen: false
    },
    mutations: {
      setPageTitle(state, pageTitle) {
        state.pageTitle = pageTitle;
      },
      toggleMobileMenu(state, newMenuState = !state.mobileMenuOpen) {
        state.mobileMenuOpen = newMenuState;
      }
    }
  });
};

export default createStore;
