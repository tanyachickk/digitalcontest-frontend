<template lang="pug">
  .basic-button(
    :class="buttonClass"
    v-on="listeners"
  )
    slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class BasicButton extends Vue {
  @Prop({ type: String, default: "primary" })
  private theme!: "primary" | "default";
  @Prop({ type: String, default: "default" })
  private size!: "extra-small" | "small" | "default" | "large";
  @Prop({ type: Boolean, default: false })
  private outline!: boolean;
  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;
  @Prop({ type: Boolean, default: true })
  private padding!: boolean;

  get listeners() {
    return {
      ...this.$listeners,
      click: (event: MouseEvent) => {
        if (!this.disabled) {
          this.$emit("click", event);
        }
      }
    };
  }

  get buttonClass() {
    return {
      [this.theme]: true,
      [this.size]: true,
      ["outline"]: this.outline,
      ["disabled"]: this.disabled,
      "no-padding": !this.padding
    };
  }
}
</script>

<style lang="scss" scoped>
.basic-button {
  position: relative;
  padding: 0.5625rem 1rem;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125;
  border-radius: 0.25rem;
  border: 1px solid var(--light-gray);
  background-color: white;
  color: var(--blue-gray);
  box-shadow: none;
  transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.125rem 0.625rem rgba(129, 142, 163, 0.2),
      0 0.0625rem 0.125rem rgba(129, 142, 163, 0.3);
  }
  &.primary {
    color: white;
    background-color: var(--primary);
    border: 1px solid var(--primary);
    &.outline {
      color: var(--primary);
      background-color: white;
    }
    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
        0 4px 10px rgba(0, 123, 255, 0.25);
    }
  }
  &.small {
    padding: 0.4rem 0.75rem;
    font-size: 0.6875rem;
    line-height: 1.5;
  }
  &.extra-small {
    padding: 0.2rem 0.5rem;
    font-size: 0.6875rem;
    line-height: 1.5;
  }
  &.no-padding {
    padding: 0;
  }
  &.disabled {
    cursor: default;
    &:hover {
      box-shadow: none;
    }
    &::after {
      content: "";
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
