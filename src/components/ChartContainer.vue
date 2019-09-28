<template lang="pug">
  card.chart
    .chart__title {{ title }}
    .chart__content
      slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';

@Component({
  components: {
    Card,
  },
})
export default class ChartContainer extends Vue {
  @Prop() private title: any;
}
</script>

<style lang="scss" scoped>
.chart {
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  &__title {
    padding: 1rem 0 1.5rem;
    font-size: 1rem;
    color: var(--dark-gray);
    text-align: center;
  }
}
</style>
