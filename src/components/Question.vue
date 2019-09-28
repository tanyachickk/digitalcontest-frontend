<template lang="pug">
  .question
    .question__row
      control-label Текст вопроса
      basic-input.question__control
    .question__row
      question-type-control.question__control(:is-inline="true")
    .question__row
      question-options.question__control
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
}
</script>

<style lang="scss" scoped>
.question {
  &__row {
    margin-bottom: 0.5rem;
  }
}
</style>
