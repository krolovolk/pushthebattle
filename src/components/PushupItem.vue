<template>
  <div class="pu-note">
    <div class="pu-note__name">{{ note.name }}</div>
    <div class="pu-note__date">{{ note.date }}</div>
    <div class="pu-note__sum">{{ note.sum }}</div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  props: {
    note: Object
  }
};
</script>

<style scoped lang="less">
.pu-note {
  display: flex;
  & > div {
    padding: 0 5px;
  }
  &__name {
    text-transform: uppercase;
  }
  &__date {
    font-style: italic;
  }
  &__sum {
    font-weight: bold;
  }
}
</style>
