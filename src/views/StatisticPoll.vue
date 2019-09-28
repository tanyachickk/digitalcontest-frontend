<template lang="pug">
  .statistic
    page-title
    back-to-polls
    .statistic__body(v-if="currentPoll")
      .statistic__poll-data
        poll-detail(:poll="currentPoll" :show-controls="false")
      .statistic__results(v-if="questionIds.length")
        .statistic__question(v-for="question in questionsData" :key="question.id")
          chart-container(:title="question.title")
            rating-chart(v-if="question.type === 'rating'" :rating="statistic[question.id]")
            options-chart(v-if="question.type === 'select'" :options="statistic[question.id]")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import PageTitle from "@/components/PageTitle.vue";
import BackToPolls from "@/components/BackToPolls.vue";
import BasicButton from "@/components/BasicButton.vue";
import Card from "@/components/Card.vue";
import CardHeader from "@/components/CardHeader.vue";
import CardBody from "@/components/CardBody.vue";
import PollsFilter from "@/components/PollsFilter.vue";
import { getStatistic } from "@/api/statistic";
import PollDetail from "@/components/PollDetail.vue";
import ChartContainer from "@/components/ChartContainer.vue";
import RatingChart from "@/components/charts/RatingChart";
import OptionsChart from "@/components/charts/OptionsChart";
// import PollsQuestionView from '@/components/PollsQuestionView.vue';

@Component({
  components: {
    PollDetail,
    PageTitle,
    BackToPolls,
    BasicButton,
    Card,
    CardHeader,
    CardBody,
    ChartContainer,
    RatingChart,
    OptionsChart
  }
})
export default class Statistic extends Vue {
  private statistic = {};
  private isLoading = false;
  private errorMessage = "";

  @Prop()
  id;

  @Getter("getPollById")
  getPollById;

  get currentPoll() {
    return this.getPollById(this.id);
  }

  get questionsData() {
    if (!this.currentPoll) {
      return [];
    }
    return this.currentPoll.questions.filter(
      question => question.type === "select" || question.type === "rating"
    );
  }

  get questionIds() {
    return Object.keys(this.statistic);
  }

  createPoll() {
    this.$router.push("/polls/new");
  }

  async created() {
    try {
      this.isLoading = true;
      this.errorMessage = "";
      this.$vs.loading({ color: "#0088bb" });
      this.statistic = await getStatistic(this.id);

      if (!this.currentPoll) {
        this.$router.replace("/");
      }
    } catch (e) {
      this.errorMessage = e;
    } finally {
      this.isLoading = false;
      this.$vs.loading.close();
    }
  }
}
</script>

<style lang="scss" scoped>
.statistic {
  overflow: auto;
  &__body {
    padding: 1.5rem 2rem;
  }
  &__poll-data {
    margin-bottom: 1.5rem;
  }
}
</style>