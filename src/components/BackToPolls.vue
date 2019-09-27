<template lang="pug">
  router-link.link(to="polls")
    i.material-icons.link__icon arrow_back
    .link__text Вернуться к опросам
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BackToPolls extends Vue {}
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  color: var(--gray);
  font-weight: 400;
  font-size: 14px;
  margin-left: 1.5rem;
  &__icon {
    font-size: 1rem;
  }
  &__text {
    margin-left: 0.5rem;
  }
}
</style>