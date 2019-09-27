<template lang="pug">
  .field
    form-control-label Возраст
    vue-slider.age-control(
      :value="[0,100]"
      tooltip-placement="bottom"
      :dot-options="dotOptions"
      :processStyle="{ backgroundColor: '#0088BB' }"
      @dragging="$emit('input', $event)"
      @change="$emit('input', $event)"
    )
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import FormControlLabel from "@/components/FormControlLabel.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

@Component({
  components: {
    VueSlider,
    FormControlLabel
  }
})
export default class AgeControl extends Vue {
  @Prop({ default: () => [0, 100] })
  private value!: number[];

  private dotOptions = {
    tooltip: "always",
    style: { border: "1px solid #e1e5eb" }
  };
}
</script>

<style lang="scss" scoped>
.field {
  &__control {
    padding: 0.25rem 0;
  }
}
</style>

<style lang="scss">
.age-control {
  margin: 0 0.5rem 2rem 0.5rem;
  .vue-slider-dot-tooltip-bottom {
    bottom: -5px;
  }
  .vue-slider-dot-tooltip-inner {
    padding: 0;
    color: var(--secondary);
    background: none;
    box-shadow: none;
    &::before,
    &::after {
      display: none;
    }
  }
}
</style>
