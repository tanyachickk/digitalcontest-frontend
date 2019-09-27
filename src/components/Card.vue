<template lang="pug">
  .card
    slot(name="header")
    slot
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  border: none;
  box-shadow: 0 0.125rem 0 rgba(100, 100, 100, 0.1), 0 0.25rem 0.5rem rgba(100, 100, 100, 0.1),
    0 0.75rem 0.75rem rgba(100, 100, 100, 0.05), 0 0.5rem 4rem rgba(100, 100, 100, 0.1);
}
</style>
