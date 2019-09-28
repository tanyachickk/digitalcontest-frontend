<template lang="pug">
  card
    form-wizard(color="#0088bb" :title="null" :subtitle="null" finishButtonText="Сохранить")
      tab-content(title="Основное" class="mb-5")
        .tab.tab_main
          .tab__row
            .tab__inputs
              .tab__control.tab__control_title
                control-label Заголовок опроса*
                basic-input(v-model="title" size="large")
              .tab__control.tab__control_description
                control-label Описание*
                basic-textarea(v-model="text" min-height="6rem")
            .tab__image-wrapper
              control-label Изображение
              label.tab__image-upload(for="upload")
                image-placeholder(v-if="!image" :width="80" :height="80" :stroke-width="0.5")
                img.tab__image(v-else :src="`${baseUrl}${image}`")
              input#upload(type="file" accept="image/*" @change="uploadPhoto($event.target.files[0])")
          .tab__row
            a.tab__add-button + Прикрепить видео
            a.tab__add-button + Прикрепить геометку
      tab-content(title="Вопросы" class="mb-5")
        .tab__question(v-for="(question, i) in questions")
          question(:question="question" @update="updateQuestion(i, $event)")
        basic-button.add-question(theme="default" :padding="false" @click="addQuestion")
          .add-question__content
            i.material-icons.add-question__icon add
            .add-question__text Добавить ещё один вопрос
      tab-content(title="Аудитория" class="mb-5")
        .tab
          company-control(:value="legalType" :is-inline="true" @input="legalType = $event")
          //- gender-control(:is-inline="true")
          //- age-control(:is-inline="true")
      basic-button(slot="prev" theme="default") Назад
      basic-button(slot="next") Далее
      basic-button(slot="finish" @click="save") Сохранить
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
import Question from "@/components/Question.vue";
import BasicTextarea from "@/components/BasicTextarea.vue";
import BasicButton from "@/components/BasicButton.vue";
import CardHeader from "@/components/CardHeader.vue";
import CompanyControl from "@/components/CompanyControl.vue";
import GenderControl from "@/components/GenderControl.vue";
import AgeControl from "@/components/AgeControl.vue";
import { FormWizard, TabContent } from "vue-form-wizard";
import QuestionTypeControl from "@/components/QuestionTypeControl.vue";
import QuestionOptions from "@/components/QuestionOptions.vue";
import ImagePlaceholder from "@/components/ImagePlaceholder.vue";
import { upload } from "@/api/upload";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

const question = {
  title: "",
  type: "rating",
  options: []
};

@Component({
  components: {
    Card,
    Question,
    ControlLabel,
    BasicInput,
    CardHeader,
    FormWizard,
    TabContent,
    BasicButton,
    BasicTextarea,
    QuestionTypeControl,
    QuestionOptions,
    CompanyControl,
    AgeControl,
    GenderControl,
    ImagePlaceholder
  }
})
export default class PollEditor extends Vue {
  @Prop()
  private specializations!: any[];

  private title = "";
  private text = "";
  private type = "rating";
  private sex = null;
  private specialization: null | number[] = null;
  private age = [0, 100];
  private questions = [{ ...question }];
  private legalType = null;
  private image = "";
  private baseUrl = process.env.VUE_APP_HOST;

  private dotOptions = {
    tooltip: "always",
    style: { border: "1px solid #e1e5eb" }
  };

  get pollData() {
    return {
      title: this.title,
      text: this.text,
      image: this.image,
      questions: this.questions,
      legalType: this.legalType
    };
  }

  private updateQuestion(i: number, value: any) {
    this.questions[i] = { ...value };
    this.questions = [...this.questions];
  }

  private addQuestion() {
    this.questions.push({ ...question });
  }

  private async uploadPhoto(file) {
    if (!file) {
      return;
    }
    if (file.size > 3000000) {
      alert("Размер файла не должен превышать 3MB");
      this.image = "";
      return;
    }
    this.$vs.loading({ color: "#0088bb" });
    const formData = new FormData();
    formData.append("file", file);
    try {
      const result: any = await upload(formData);
      this.image = result.href;
    } catch (e) {
      alert("Произошла ошибка при загрузке файла. Попробуйте другой");
      this.image = "";
    } finally {
      this.$vs.loading.close();
    }
  }

  private save() {
    this.$emit("save", this.pollData);
  }

  private create() {
    this.$emit("create", this.pollData, this.options);
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
  &__question {
    padding-bottom: 1rem;
    // border-bottom: 1px solid var(--light-gray);
    margin-bottom: 2rem;
  }
  &__row {
    display: flex;
    width: 100%;
  }
  &__inputs {
    flex-grow: 1;
  }
  &__image-wrapper {
    margin-left: 1.5rem;
    flex-shrink: 0;
    color: var(--light-gray);
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  &__image-upload {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 180px;
    height: 180px;
    border: 1px solid var(--light-gray);
    overflow: hidden;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.025);
    cursor: pointer;
    .material-icons {
      font-size: 5rem;
      color: var(--light-gray);
    }
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
.add-question {
  max-width: 250px;
  margin-bottom: 2rem;
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 1rem;
  }
  &__icon {
    margin-right: 0.3rem;
    font-size: 1rem;
  }
}
#upload {
  display: none;
}
</style>
