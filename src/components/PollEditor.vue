<template lang="pug">
  card
    card-header(slot="header" @close="$emit('close')") Создание вопроса
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
    //-   basic-button.modal-footer__button(
    //-     theme="primary"
    //-     @click="create"
    //-   ) Создать
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import CardHeader from "@/components/CardHeader.vue";
// import BasicModalBody from '@/components/BasicModalBody.vue';
// import BasicModalFooter from '@/components/BasicModalFooter.vue';
// import BasicButton from '@/components/BasicButton.vue';
// import FormControlLabel from '@/components/FormControlLabel.vue';
// import BasicInput from '@/components/BasicInput.vue';
// import BasicTextarea from '@/components/BasicTextarea.vue';
// import GenderControl from '@/components/GenderControl.vue';
// import AgeControl from '@/components/AgeControl.vue';
// import SpecializationControl from '@/components/SpecializationControl.vue';
// import QuestionTypeControl from '@/components/QuestionTypeControl.vue';
// import QuestionOptions from '@/components/QuestionOptions.vue';

@Component({
  components: {
    Card,
    CardHeader
    // BasicButton,
    // FormControlLabel,
    // BasicInput,
    // BasicTextarea,
    // GenderControl,
    // AgeControl,
    // SpecializationControl,
    // QuestionTypeControl,
    // QuestionOptions,
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

<style lang="scss" scoped>
.body {
  max-height: 80vh;
  overflow: auto;
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
