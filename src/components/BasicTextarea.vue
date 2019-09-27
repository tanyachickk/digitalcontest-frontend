<template lang="pug">
  .basic-textarea
    textarea.basic-textarea__textarea(
      :value="value"
      :placeholder="placeholder"
      :type="type"
      :class="{ 'basic-textarea__textarea_error': error }"
      :style="{ minHeight: minHeight || auto }"
      v-on="listeners"
    )
    .basic-textarea__error {{ error }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class BasicTextarea extends Vue {
  @Prop({ type: String, default: "" })
  private value!: string;
  @Prop({ type: String, default: "" })
  private type!: string;
  @Prop({ type: String, default: "" })
  private placeholder!: string;
  @Prop({ type: String, default: "" })
  private error!: string;
  @Prop({ type: String, default: "" })
  private minHeight!: string;

  get listeners() {
    return {
      ...this.$listeners,
      input: (event: any) => {
        this.$emit("input", event.target.value);
      }
    };
  }
}
</script>

<style lang="scss" scoped>
.basic-textarea {
  position: relative;
  &__textarea {
    width: 100%;
    height: auto;
    padding: 0.4375rem 0.75rem;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--dark-gray);
    background-color: white;
    border: 1px solid var(--light-gray);
    border-radius: 0.25rem;
    font-family: sans-serif;
    will-change: border-color, box-shadow;
    box-shadow: none;
    transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
      border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
    &:focus {
      outline: none;
      color: var(--dark-gray);
      border-color: var(--primary);
      box-shadow: 0 0.313rem 0.719rem rgba(0, 123, 255, 0.1),
        0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
    }
    &_error {
      border-color: var(--danger);
      box-shadow: 0 0.5rem 1rem rgba(196, 24, 60, 0.1);
      &:focus {
        outline: none;
        border-color: var(--danger);
        box-shadow: none;
        box-shadow: 0 0.5rem 1rem rgba(196, 24, 60, 0.1),
          0 0.15rem 0.3rem 0.04rem rgba(196, 24, 60, 0.2);
      }
    }
  }

  &__error {
    position: absolute;
    top: 100%;
    margin-top: 0.125rem;
    margin-left: 0.5rem;
    color: var(--danger);
    font-weight: 400;
    font-size: 0.625rem;
  }
}
</style>
