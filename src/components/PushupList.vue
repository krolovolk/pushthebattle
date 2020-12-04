<template>
  <div>
    <h2>{{ msg }}</h2>
    <div class="pu-list">
      <PushupItem
        class="pu-list__item"
        v-for="note in pushups"
        :key="note.id"
        :note="note"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PushupItem from "./PushupItem.vue";

export default {
  props: {
    msg: String,
    pushups: Array
  },
  components: {
    PushupItem
  },
  computed: mapState({
    // pushups: state => state.pushups
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pu-list {
  width: 50%;
  margin: 0 auto;
  &__item {
    padding: 10px 0;
  }
}
</style>
