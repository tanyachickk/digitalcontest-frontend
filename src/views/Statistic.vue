<template lang="pug">
  div
    page-title
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageTitle from "@/components/PageTitle.vue";

@Component({
  components: {
    PageTitle
  }
})
export default class Statistic extends Vue {}
</script>