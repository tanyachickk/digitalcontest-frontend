<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-image"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component
export default class ImagePlaceholder extends Vue {
  @Prop({ type: Number, default: 24 })
  width;
  @Prop({ type: Number, default: 24 })
  height;
  @Prop({ type: Number, default: 2 })
  strokeWidth;
}
</script>

<style lang="scss" scoped>
</style>
