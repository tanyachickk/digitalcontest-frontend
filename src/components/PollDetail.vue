<template lang="pug">
  card.poll
    .poll__row
      .poll__image-wrapper
        img.poll__image(v-if="poll.image" :src="`${baseUrl}${poll.image}`")
        image-placeholder(v-else :width="60" :height="60" :stroke-width="0.5")
      .poll__content
        .poll__title {{ poll.title }}
        .poll__text {{ poll.text }}
    .poll__footer(v-if="showControls")
      .poll__show-detail Показать детальную информацию
      button.poll__button(@click="$emit('show-statistic')")
        i.material-icons pie_chart
      button.poll__button
        i.material-icons edit
      button.poll__button(@click="$emit('delete')")
        i.material-icons delete
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import ImagePlaceholder from "@/components/ImagePlaceholder.vue";

@Component({
  components: {
    Card,
    ImagePlaceholder
  }
})
export default class PollsDetail extends Vue {
  @Prop()
  poll;
  @Prop({ default: true })
  showControls;

  private baseUrl = process.env.VUE_APP_HOST;
}
</script>

<style lang="scss" scoped>
.poll {
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  min-height: 5rem;
  &__image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 1px solid var(--light-gray);
    margin-right: 1rem;
    border-radius: 5px;
    color: var(--light-gray);
    background-color: rgba(0, 0, 0, 0.02);
    overflow: hidden;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  &__content {
    flex-grow: 1;
  }
  &__row {
    display: flex;
  }
  &__title {
    position: relative;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 0.5rem;
    margin-right: 3.5rem;
  }
  &__text {
    position: relative;
    font-weight: 400;
    color: var(--gray);
    font-size: 14px;
    margin-bottom: 0.5rem;
    margin-right: 3.5rem;
  }
  &__show-detail {
    margin-left: 0;
    margin-right: auto;
    color: var(--primary);
    align-self: flex-end;
    font-size: 12px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__button {
    border: none;
    outline: none;
    background-color: none;
    padding: 0.4rem;
    cursor: pointer;
    .material-icons {
      color: var(--gray);
      font-size: 1.25rem;
      &:hover {
        color: var(--primary);
      }
    }
  }
  &__control {
    padding: 0.5rem;
    color: var(--gray);
    transition: color 0.2s ease;
    cursor: pointer;
    &:hover {
      color: var(--blue);
    }
  }
  &__option {
    position: relative;
    padding-left: 2rem;
    color: var(--gray);
    font-size: 0.875rem;
    line-height: 2;
    &::before {
      content: "";
      position: absolute;
      left: 1rem;
      top: 50%;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      border: 1px solid var(--primary);
      transform: translateY(-50%);
    }
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
  }
  &__tag {
    font-size: 0.7rem;
    padding: 0.25rem 0.7rem;
    background-color: var(--light-secondary);
    color: var(--secondary);
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    &.red {
      background-color: var(--light-danger);
    }
    &.green {
      background-color: var(--light-success);
    }
    &.orange {
      background-color: var(--light-accent);
    }
  }
}
</style>
