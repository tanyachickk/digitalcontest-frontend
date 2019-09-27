<template lang="pug">
  .control-label
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class FormControlLabel extends Vue {}
</script>

<style lang="scss" scoped>
.control-label {
  padding: 0.5rem 0;
  color: #868e96;
  font-size: 15px;
  font-weight: 500;
}
</style>
