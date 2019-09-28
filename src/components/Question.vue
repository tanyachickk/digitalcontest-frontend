<template lang="pug">
  .question
    .question__row
      control-label Текст вопроса
      basic-input.question__control(:value="question.title" @input="onChangeTitle")
    .question__row
      question-type-control.question__control(:value="question.type" :is-inline="true" @input="onChangeType")
    .question__row
      question-options.question__control(v-if="question.type === 'select'" :value="question.options" @input="onChangeOptions")
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import ControlLabel from "@/components/FormControlLabel.vue";
import QuestionTypeControl from "@/components/QuestionTypeControl.vue";
import QuestionOptions from "@/components/QuestionOptions.vue";
import BasicInput from "@/components/BasicInput.vue";

@Component({
  components: {
    ControlLabel,
    QuestionTypeControl,
    QuestionOptions,
    BasicInput
  }
})
export default class Question extends Vue {
  @Prop()
  question;

  onChangeTitle(value) {
    this.$emit("update", { ...this.question, title: value });
  }

  onChangeType(value) {
    this.$emit("update", { ...this.question, type: value });
  }

  onChangeOptions(value) {
    this.$emit("update", { ...this.question, options: value });
  }
}
</script>

<style lang="scss" scoped>
.question {
  &__row {
    margin-bottom: 0.5rem;
  }
}
</style>
