<template lang="pug">
  .basic-input
    .basic-input__addon.basic-input__addon_left(v-if="$slots['left-addon']")
      slot(name="left-addon")
    .basic-input__body
      input.basic-input__input(
        :value="value"
        :placeholder="placeholder"
        :type="type"
        :class="[!!error && 'basic-input__input_error', size]"
        @keyup.enter="$emit('enter')"
        v-on="listeners"
      )
      .basic-input__error {{ error }}
    .basic-input__addon.basic-input__addon_right(v-if="$slots['right-addon']")
      slot(name="right-addon")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class BasicInput extends Vue {
  @Prop({ type: String, default: '' })
  private value!: string;
  @Prop({ type: String, default: 'default' })
  private size!: 'default' | 'large';
  @Prop({ type: String, default: '' })
  private type!: string;
  @Prop({ type: String, default: '' })
  private placeholder!: string;
  @Prop({ type: String, default: '' })
  private error!: string;

  get listeners() {
    return {
      ...this.$listeners,
      input: (event: any) => {
        this.$emit('input', event.target.value);
      },
    };
  }
}
</script>

<style lang="scss" scoped>
.basic-input {
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  &__body {
    position: relative;
    flex-grow: 1;
    &:first-child {
      .basic-input__input {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }
    }
    &:last-child {
      .basic-input__input {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
    }
  }
  &__input {
    width: 100%;
    height: auto;
    padding: 0.4375rem 0.75rem;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--dark-gray);
    background-color: white;
    border: 1px solid var(--light-gray);
    font-weight: 300;
    will-change: border-color, box-shadow;
    border-radius: 0;
    box-shadow: none;
    transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
    &:focus {
      outline: none;
      color: var(--dark-gray);
      border-color: var(--primary);
      box-shadow: 0 0.313rem 0.719rem rgba(0, 123, 255, 0.1), 0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
    }
    &.large {
      font-size: 1rem;
      padding: 0.6rem 0.75rem;
    }
    &_error {
      border-color: var(--danger);
      box-shadow: 0 0.5rem 1rem rgba(0, 102, 179, 0.1);
      &:focus {
        outline: none;
        border-color: var(--danger);
        box-shadow: none;
        box-shadow: 0 0.5rem 1rem rgba(0, 102, 179, 0.1), 0 0.15rem 0.3rem 0.04rem rgba(0, 102, 179, 0.2);
      }
    }
  }

  &__addon {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 2rem;
    border: 1px solid var(--light-gray);
    color: var(--light-gray);
    font-size: 0.5rem;
    &_left {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
      border-right: none;
    }
    &_right {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      border-left: none;
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
