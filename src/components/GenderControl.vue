<template lang="pug">
  .field
    form-control-label Пол
    .field__controls(:class="isInline && 'inline'")
      radio-button.field__control(
        v-for="[key, title] of values"
        :key="title"
        :is-active="key === value"
        @click="$emit('input', key)"
      ) {{ title }}
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import RadioButton from '@/components/RadioButton.vue';
import FormControlLabel from '@/components/FormControlLabel.vue';

@Component({
  components: {
    RadioButton,
    FormControlLabel,
  },
})
export default class GenderControl extends Vue {
  @Prop({ default: null })
  private value!: any;
  @Prop({ default: false })
  private isInline!: boolean;

  private values = new Map([[null, 'Любой'], ['male', 'Мужской'], ['female', 'Женский']]);
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
