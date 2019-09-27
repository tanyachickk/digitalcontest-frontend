<template lang="pug">
  .new-poll
    page-title
    back-to-polls
    .new-poll__body
      poll-editor
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
export default class NewPoll extends Vue {}
</script>

<style lang="scss" scoped>
.new-poll {
  &__body {
    padding: 1.5rem 2rem;
  }
}
</style>