<template lang="pug">
  card
    form-wizard(color="#0088bb" :title="null" :subtitle="null" finishButtonText="Сохранить")
      tab-content(title="Основное" class="mb-5")
        .tab.tab_main
          .tab__row
            .tab__inputs
              .tab__control.tab__control_title
                control-label Заголовок опроса*
                basic-input(size="large")
              .tab__control.tab__control_description
                control-label Описание*
                basic-textarea(min-height="6rem")
            .tab__image
              control-label Изображение
              .tab__image-upload
          .tab__row
            a.tab__add-button + Прикрепить видео
            a.tab__add-button + Прикрепить геометку
      tab-content(title="Вопросы" class="mb-5")
        .tab.tab_questions
          .tab__control.tab__control_question-title
            control-label Текст вопроса
            basic-input.tab__control
            question-type-control.tab__control(:is-inline="true")
            question-options.tab__control
      tab-content(title="Аудитория" class="mb-5")
        .tab 3333
      basic-button(slot="prev" theme="default") Назад
      basic-button(slot="next") Далее
      basic-button(slot="finish") Сохранить
    //- .body(slot="body")
    //-   .param
    //-     form-control-label Текст вопроса
    //-     basic-input(v-model="text" size="large")
    //-   question-type-control.param(v-model="type" :is-inline="true")
    //-   question-options.param(v-if="type === 'singleselect'" v-model="options")
    //-   .divider
    //-   .label Целевая аудитория
    //-   gender-control.param(v-model="sex" :is-inline="true")
    //-   age-control.param(v-model="age")
    //-   specialization-control.param(v-model="specialization" :list="specializations" :is-inline="true")
    //- basic-modal-footer(slot="footer")
      //- basic-button.modal-footer__button(
      //-   theme="primary"
      //-   @click="create"
      //- ) Создать
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import ControlLabel from "@/components/FormControlLabel.vue";
import BasicInput from "@/components/BasicInput.vue";
import BasicTextarea from "@/components/BasicTextarea.vue";
import BasicButton from "@/components/BasicButton.vue";
import CardHeader from "@/components/CardHeader.vue";
import { FormWizard, TabContent } from "vue-form-wizard";
import QuestionTypeControl from "@/components/QuestionTypeControl.vue";
import QuestionOptions from "@/components/QuestionOptions.vue";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

@Component({
  components: {
    Card,
    ControlLabel,
    BasicInput,
    CardHeader,
    FormWizard,
    TabContent,
    BasicButton,
    BasicTextarea,
    QuestionTypeControl,
    QuestionOptions
  }
})
export default class QuestionModal extends Vue {
  @Prop()
  private specializations!: any[];

  private text = "";
  private type = "rating";
  private sex = null;
  private specialization: null | number[] = null;
  private age = [0, 100];
  private options = [""];

  private dotOptions = {
    tooltip: "always",
    style: { border: "1px solid #e1e5eb" }
  };

  get questionData() {
    return {
      text: this.text,
      type: this.type,
      sex: this.sex,
      minAge: this.age[0],
      maxAge: this.age[1],
      specializations: this.specialization
        ? this.specialization.map(id => ({ id }))
        : null
    };
  }

  private create() {
    this.$emit("create", this.questionData, this.options);
    this.$emit("close");
  }
}
</script>

 <style lang="scss">
.vue-form-wizard.md .wizard-icon-circle {
  width: 40px;
  height: 40px;
}
.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle {
  top: 25px;
  height: 2px;
}
.vue-form-wizard .wizard-icon-circle {
  border-width: 1px !important;
}
.stepTitle {
  line-height: 2;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
}
.vue-form-wizard.md .wizard-nav-pills > li.active > a .wizard-icon,
.vue-form-wizard .wizard-nav-pills > li > a .wizard-icon {
  font-size: 18px;
  font-family: "Open Sans";
  font-weight: 400;
}
</style>

<style lang="scss" scoped>
.body {
  max-height: 80vh;
  overflow: auto;
}
.tab {
  padding: 0 2rem 1rem;
  &__row {
    display: flex;
    width: 100%;
  }
  &__inputs {
    flex-grow: 1;
  }
  &__image {
    margin-left: 1.5rem;
    flex-shrink: 0;
  }
  &__image-upload {
    width: 180px;
    height: 180px;
    border: 1px solid var(--light-gray);
    border-radius: 5px;
  }
  &__control {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
  &__add-button {
    color: var(--primary);
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    margin-top: 1rem;
    margin-right: 1.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
}
.question__info {
  margin-left: 5rem;
}
.param {
  margin: 0.5rem 2rem;
  &:last-child {
    margin-bottom: 2rem;
  }
}
.label {
  padding: 1rem 2rem 0;
  color: var(--dark-gray);
}
.inline-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.inline-control {
  margin-right: 2rem;
  margin-top: 0.5rem;
  color: var(--secondary);
  font-size: 0.8rem;
  flex-shrink: 0;
}
.divider {
  margin-top: 2rem;
  width: 100%;
  height: 1px;
  background-color: var(--light-gray);
}
</style>
