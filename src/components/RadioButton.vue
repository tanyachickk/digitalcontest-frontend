<template lang="pug">
  .radio-button(
    :class="[isActive ? 'active' : '', isDisabled ? 'disabled' : '', size]"
    @click="onClick"
  )
    .radio-button__control
    .radio-button__label
      slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class RadioButton extends Vue {
  @Prop({ type: Boolean, default: false })
  private isActive!: boolean;
  @Prop({ type: Boolean, default: false })
  private isDisabled!: boolean;
  @Prop({ type: String, default: 'default' })
  private size!: 'small' | 'default' | 'large';

  private onClick() {
    if (!this.isDisabled) {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  &__control {
    position: relative;
    width: 1.125rem;
    height: 1.125rem;
    background-color: white;
    border-radius: 50%;
    border: 1px solid var(--light-gray);
    transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
    box-shadow: none;
    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      background: white;
      top: 50%;
      left: 50%;
      width: 0.5rem;
      height: 0.5rem;
      opacity: 0;
      transform-origin: center;
      transform: scale(0) translate(-50%, -50%);
      transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
    }
  }
  &__label {
    padding-left: 0.5em;
  }
  &.active {
    .radio-button__control {
      border-color: var(--primary);
      background-color: var(--primary);
      &::after {
        opacity: 1;
        transform: scale(1) translate(-50%, -50%);
      }
    }
  }
  &.disabled {
    cursor: default;
    .radio-button__control {
      opacity: 0.7;
    }
    .radio-button__label {
      opacity: 0.5;
    }
  }
  &.small {
    .radio-button__control {
      width: 0.75rem;
      height: 0.75rem;
      &::after {
        width: 0.3rem;
        height: 0.3rem;
      }
    }
  }
}
</style>
