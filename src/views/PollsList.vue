<template lang="pug">
  .polls-list
    page-title
    .polls-list__controls
      basic-button.polls-list__button(@click="createPoll")
        i.material-icons.polls-list__button-icon add
        .polls-list__button-text Создать новый опрос
    .polls-list__body(v-if="!isLoading")
      card.polls-list__filter
        card-header(slot="header") Фильтр
        card-body
          polls-filter(
            :company.sync="legalType"
            :sex.sync="filterSex"
            :age.sync="filterAge"
          )
      .polls-list__questions(v-if="filteredList.length")
        .polls-list__item(v-for="poll in filteredList" :key="poll.id")
          poll-detail(:poll="poll" @delete="deletePoll(poll.id)" @show-statistic="showStatistic(poll.id)")
        //- polls-question-view(v-for="question in filteredQuestions" :key="question.id" :question="question" @edit="isShowModal = true" @delete="deleteQuestion(question.id)")
      .polls-list__no-questions(v-else) Для выбранной аудитории пока нет ни одного опроса. Создайте опрос или измените параметры фиьтрации
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class";
import PageTitle from "@/components/PageTitle.vue";
import BasicButton from "@/components/BasicButton.vue";
import Card from "@/components/Card.vue";
import CardHeader from "@/components/CardHeader.vue";
import CardBody from "@/components/CardBody.vue";
import PollsFilter from "@/components/PollsFilter.vue";
import PollDetail from "@/components/PollDetail.vue";
// import PollsQuestionView from '@/components/PollsQuestionView.vue';

@Component({
  components: {
    PageTitle,
    BasicButton,
    Card,
    CardHeader,
    CardBody,
    PollsFilter,
    PollDetail
  }
})
export default class PollList extends Vue {
  private questions = [];
  private legalType = null;
  private filterSex = null;
  private filterAge = [0, 100];

  @State("isLoading")
  isLoading;

  @Getter("pollsList")
  pollsList;

  @Action("deletePoll")
  deletePoll;

  @Watch("isLoading")
  onChangeIsLoading(value) {
    if (value) {
      this.$vs.loading({ color: "#0088bb" });
    } else {
      this.$vs.loading.close();
    }
  }

  get filteredList() {
    return this.pollsList.filter(
      poll =>
        this.legalType === null ||
        poll.legalType === null ||
        poll.legalType === this.legalType
    );
  }

  createPoll() {
    this.$router.push("/polls/new");
  }

  showStatistic(id) {
    this.$router.push({ path: `/statistic/${id}` });
  }

  created() {
    if (this.isLoading) {
      this.$vs.loading({ color: "#0088bb" });
    }
  }
}
</script>

<style lang="scss" scoped>
.polls-list {
  &__body {
    flex-grow: 1;
    padding: 1rem 2rem 4rem 24rem;
    height: 100%;
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
  &__item {
    margin-bottom: 1.5rem;
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