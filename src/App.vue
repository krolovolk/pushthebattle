<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo-bang.png" />
    <br />
    <button @click="setPushupsByUser('антон')">Все Антоны</button>
    <button @click="setPushupsByUser('Денис')">Все Денисы</button>
    <button @click="setPushupsAll">Все</button>
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
      filteredPushups: this.$store.state.pushups
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
  margin-top: 60px;
}
</style>
