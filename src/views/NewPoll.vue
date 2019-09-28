<template lang="pug">
  .new-poll
    page-title
    back-to-polls
    .new-poll__body
      poll-editor(@save="create")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import PageTitle from "@/components/PageTitle.vue";
import BackToPolls from "@/components/BackToPolls.vue";
import PollEditor from "@/components/PollEditor.vue";

@Component({
  components: {
    PageTitle,
    BackToPolls,
    PollEditor
  }
})
export default class NewPoll extends Vue {
  @Action("createPoll")
  private createPoll: any;

  create(data: any) {
    this.createPoll(data);
    this.$router.push("/polls");
  }
}
</script>

<style lang="scss" scoped>
.new-poll {
  overflow: auto;
  &__body {
    padding: 1.5rem 2rem 7rem;
  }
}
</style>