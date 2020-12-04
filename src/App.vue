<template>
  <div id="app">
    <img alt="Bang" class="logo" src="./assets/logo-bang.png" />
    <br />
    <button @click="setPushupsByUser('антон')">Все Антоны</button>
    <button @click="setPushupsByUser('Денис')">Все Денисы</button>
    <button @click="setPushupsAll">Все</button>
    <br /><br />
    <select v-model="selectedName">
      <option disabled value="">Выберите Имя</option>
      <option>Антон</option>
      <option>Денис</option>
    </select>
    <input
      v-model.number="inputSum"
      placeholder="Сколько отжался Антон"
      type="number"
      min="1"
    />
    <button @click="addPushupsAnton()">Добавить</button>
    <br />
    <PushupList msg="Let's Push up!" :pushups="filteredPushups" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import PushupList from "./components/PushupList.vue";

export default {
  name: "App",
  data() {
    return {
      filteredPushups: this.$store.state.pushups,
      inputSum: "",
      selectedName: ""
    };
  },
  components: {
    PushupList
  },
  computed: {
    ...mapState({
      pushups: state => state.pushups
    }),
    ...mapGetters(["pushupsByUser", "pushupsAll"])
  },
  methods: {
    setPushupsByUser(name) {
      this.filteredPushups = this.pushupsByUser(name);
    },
    setPushupsAll() {
      this.filteredPushups = this.pushupsAll;
    },
    addPushupsAnton() {
      console.log("click", typeof this.inputSum);
      if (this.inputSum && this.selectedName) {
        const curPushup = {
          name: this.selectedName,
          date: new Date().toLocaleString(),
          sum: this.inputSum
        };
        this.$store.commit("addPushups", curPushup);
      }
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .logo {
    width: 100%;
    max-width: 300px;
    padding: 30px 0;
  }
}
</style>
