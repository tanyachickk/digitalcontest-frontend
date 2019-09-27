<template lang="pug">
  div
    page-title
    div {{ id }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageTitle from "@/components/PageTitle.vue";

@Component({
  components: {
    PageTitle
  }
})
export default class EditPoll extends Vue {
  @Prop()
  id!: string;
}
</script>