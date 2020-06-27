const type = {
  // mutation
  setAToZ: "Module/setAToZ",
  // action
  setAToY: "Module/setAToY",
  // getters
  moduleAll: "Module/moduleAll",
};

export { type as ModuleType };

export default {
  namespaced: true,
  state: {
    a: "aaa",
    b: "bbbb",
  },
  mutations: {
    setAToZ(state, context) {
      state.a = "zzzz";
    },
  },
  actions: {
    setAToY({ state }, context) {
      setTimeout(() => {
        state.a = "yyyy";
      }, 1000);
    },
  },
  getters: {
    moduleAll(state) {
      return state.a + "---" + state.b;
    },
  },
};
