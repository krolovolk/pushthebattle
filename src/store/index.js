import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pushups: [
      { name: "Антон", date: "12.12.2020, 12:25:23", sum: 20 },
      { name: "Денис", date: "10.12.2020, 11:43:12", sum: 41 },
      { name: "Антон", date: "09.12.2020, 14:21:33", sum: 26 }
    ]
  },
  mutations: {
    addPushups(state, pushup) {
      state.pushups.push(pushup);
    },
    removePushups(state, pushup) {
      state.pushups.splice(state.pushups.indexOf(pushup), 1);
    },
    editPushups(state, { pushup, sum = pushup.sum }) {
      const index = state.pushups.indexOf(pushup);
      state.pushups.splice(index, 1, { ...pushup, sum });
    }
  },
  actions: {},
  modules: {},
  getters: {
    pushupsAll: state => {
      return state.pushups;
    },
    pushupsByUser: state => name => {
      return state.pushups.filter(
        pushup => pushup.name.toLowerCase() === name.toLowerCase()
      );
    }
  }
});
