<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo-bang.png" />
    <PushupList msg="Let's Push up!" />
  </div>
</template>

<script>
import PushupList from "./components/PushupList.vue";

export default {
  name: "App",
  components: {
    PushupList
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
