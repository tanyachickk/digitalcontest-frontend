<template lang="pug">
  .field
    form-control-label Формат ответа
    .field__controls(:class="isInline && 'inline'")
      radio-button.field__control(
        v-for="(item, i) in values"
        :key="i"
        :is-active="item.key === value"
        @click="$emit('input', item.key)"
      ) {{ item.title }}
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import RadioButton from "@/components/RadioButton.vue";
import FormControlLabel from "@/components/FormControlLabel.vue";

@Component({
  components: {
    RadioButton,
    FormControlLabel
  }
})
export default class QuestionTypeControl extends Vue {
  @Prop({ default: "rating" })
  private value!: "rating" | "singleselect" | "comment";
  @Prop({ default: false })
  private isInline!: boolean;

  private values = [
    { key: "rating", title: "Оценка" },
    { key: "singleselect", title: "Выбор варианта" }
    // { key: 'comment', title: 'Комментарий' },
  ];
}
</script>

<style lang="scss" scoped>
.field {
  &__controls {
    &.inline {
      display: flex;
      flex-wrap: wrap;
      .field__control {
        margin-right: 1.5rem;
      }
    }
  }
  &__control {
    color: var(--secondary);
    font-size: 0.8rem;
    flex-shrink: 0;
    padding: 0.25rem 0;
  }
}
</style>
