<template lang="pug">
  .field
    form-control-label Варианты ответа
    .field__control(v-for="(item, i) in options.length" :key="i")
      basic-input.field__input(:value="options[i]" @enter="onEnter(i)" @input="onInput($event, i)")
      .field__delete-button(v-if="options.length > 1" @click="deleteOption(i)")
        font-awesome-icon(icon="trash-alt")
    basic-button.field__button(theme="default" :padding="false" @click="addOption")
      .button
        i.material-icons.button__icon add
        .button__text Добавить ещё
</template>

<script lang="ts">
import { Vue, Prop, Watch, Component } from 'vue-property-decorator';
import BasicInput from '@/components/BasicInput.vue';
import BasicButton from '@/components/BasicButton.vue';
import FormControlLabel from '@/components/FormControlLabel.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt);

@Component({
  components: {
    BasicInput,
    BasicButton,
    FormControlLabel,
    FontAwesomeIcon,
  },
})
export default class QuestionOptions extends Vue {
  @Prop({ default: () => [''] })
  private value!: string[];

  private options = [...this.value];

  private onInput(value: string, index: number) {
    this.options[index] = value;
    this.$emit('input', this.options);
  }

  private onEnter(index: number) {
    if (index === this.value.length - 1 && this.options[index]) {
      this.addOption();
    }
  }

  private deleteOption(index: number) {
    this.options.splice(index, 1);
    this.$emit('input', this.options);
  }

  private addOption() {
    this.options.push('');
    this.$emit('input', this.options);
    this.$nextTick(() => {
      const inputs = this.$el.getElementsByClassName('basic-input__input');
      const lastInput = inputs[inputs.length - 1];
      (lastInput as HTMLElement).focus();
    });
  }
}
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: column;
  &__control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  &__input {
    flex-grow: 1;
  }
  &__delete-button {
    flex-shrink: 0;
    padding: 0.3rem 0 0.3rem 0.7rem;
    color: var(--gray);
    transition: color 0.2s ease;
    cursor: pointer;
    &:hover {
      color: var(--primary);
    }
  }
  &__button {
    align-self: flex-start;
  }
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1rem;
  &__icon {
    margin-right: 0.3rem;
    font-size: 1rem;
  }
}
</style>
