import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pushups: [
      { id: 1, name: "Антон", date: "12.12.2020 12:25", sum: 20 },
      { id: 2, name: "Денис", date: "10.12.2020 11:43", sum: 41 },
      { id: 3, name: "Антон", date: "09.12.2020 14:21", sum: 26 }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
