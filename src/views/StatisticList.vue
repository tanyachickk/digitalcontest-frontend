<template lang="pug">
  .statistic
    page-title
    .statistic__body
      card.statistic__filter
        card-header(slot="header") Фильтр
        card-body
          polls-filter(
            :sex.sync="filterSex"
            :age.sync="filterAge"
          )
      .statistic__questions(v-if="questions.length")
        //- polls-question-view(v-for="question in filteredQuestions" :key="question.id" :question="question" @edit="isShowModal = true" @delete="deleteQuestion(question.id)")
      .statistic__no-questions(v-else) Для выбранной аудитории пока нет ни одного опроса. Создайте опрос или измените параметры фиьтрации
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageTitle from "@/components/PageTitle.vue";
import BasicButton from "@/components/BasicButton.vue";
import Card from "@/components/Card.vue";
import CardHeader from "@/components/CardHeader.vue";
import CardBody from "@/components/CardBody.vue";
import PollsFilter from "@/components/PollsFilter.vue";
// import PollsQuestionView from '@/components/PollsQuestionView.vue';

@Component({
  components: {
    PageTitle,
    BasicButton,
    Card,
    CardHeader,
    CardBody,
    PollsFilter
  }
})
export default class Statistic extends Vue {
  private questions = [];
  private filterSex = null;
  private filterAge = [0, 100];

  createPoll() {
    this.$router.push("/polls/new");
  }
}
</script>

<style lang="scss" scoped>
.statistic {
  &__body {
    flex-grow: 1;
    padding: 1.5rem 2rem 2rem 24rem;
    overflow: auto;
  }
  &__filter {
    position: absolute;
    top: 9rem;
    left: calc(280px + 2rem);
    margin-right: 2rem;
    width: 20rem;
    align-self: flex-start;
  }
  &__questions {
    width: 100%;
    flex-grow: 1;
  }
  &__no-questions {
    width: 100%;
    color: var(--dark-gray);
    text-align: center;
    font-weight: 300;
    line-height: 1.3;
    font-size: 14px;
  }
  &__controls {
    position: absolute;
    top: calc(60px + 1.5rem);
    right: 2rem;
  }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    text-align: center;
  }
  &__button-icon {
    font-size: 1rem;
  }
  &__button-text {
    padding-left: 10px;
  }
}
</style>