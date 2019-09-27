<template lang="pug">
  .card-header
    slot
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CardHeader extends Vue {}
</script>

<style lang="scss" scoped>
.card-header {
  padding: 1rem;
  border-bottom: 1px solid var(--light-gray);
  color: var(--secondary);
  font-size: 1rem;
  font-weight: 500;
}
</style>
