<template lang="pug">
  .custom-badge
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Badge extends Vue {}
</script>

<style lang="scss" scoped>
.custom-badge {
  padding: 0.25em 0.75em;
  color: white;
  background-color: var(--primary);
  border-radius: 10em;
  font-size: 1em;
}
</style>
