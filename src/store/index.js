import Vue from "vue";
import Vuex from "vuex";
import Module from './modules/module'
Vue.use(Vuex);

// const { a, b } = {a: 'A', b: 'B'}
// console.log(a, b)

export default new Vuex.Store({
  modules: {
    Module,
  },
  state: {
    a: "a",
    b: "b",
  },
  mutations: {
    setAToZ(state, context) {
      console.log(context);
      state.a = "z";
    },
  },
  actions: {
    setAToY({ state }, context) {
      console.log(context);
      setTimeout(() => {
        state.a = "y";
      }, 1000);
    },
  },
  getters: {
    all(state) {
      return state.a + "-" + state.b;
    },
  },
});
