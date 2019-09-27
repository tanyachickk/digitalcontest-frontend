<template lang="pug">
  .card-body
    slot
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CardBody extends Vue {}
</script>

<style lang="scss" scoped>
.card-body {
  padding: 1rem;
  color: var(--secondary);
  font-size: 0.8rem;
}
</style>
