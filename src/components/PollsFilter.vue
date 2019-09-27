<template lang="pug">
  .wrapper
    gender-control.param(:value="sex" @input="$emit('update:sex', $event)")
    age-control.param(:value="age" @input="$emit('update:age', $event)")
    //- specialization-control.param(:value="specialization" :list="specializations" @input="$emit('update:specialization', $event)")
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import GenderControl from "@/components/GenderControl.vue";
import AgeControl from "@/components/AgeControl.vue";
// import SpecializationControl from '@/components/SpecializationControl.vue';

@Component({
  components: {
    GenderControl,
    AgeControl
    // SpecializationControl,
  }
})
export default class PollsFilter extends Vue {
  @Prop()
  private specializations!: any[];
  @Prop()
  private sex!: null | "male" | "female";
  @Prop()
  private specialization!: number[] | null;
  @Prop()
  private age!: number[] | null;
}
</script>

<style lang="scss" scoped>
.param {
  margin-bottom: 1rem;
}
</style>
