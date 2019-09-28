<template lang="pug">
  .wrapper
    company-control.param(:value="company" @input="$emit('update:company', $event)")
    //- gender-control.param(v-if="!company || company === 'person'" :value="sex" @input="$emit('update:sex', $event)")
    //- age-control.param(v-if="!company || company === 'person'" :value="age" @input="$emit('update:age', $event)")
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import CompanyControl from "@/components/CompanyControl.vue";
import GenderControl from "@/components/GenderControl.vue";
import AgeControl from "@/components/AgeControl.vue";

@Component({
  components: {
    GenderControl,
    AgeControl,
    CompanyControl
  }
})
export default class PollsFilter extends Vue {
  @Prop()
  private company!: null | "company" | "person";
  @Prop()
  private sex!: null | "male" | "female";
  @Prop()
  private age!: number[] | null;
}
</script>

<style lang="scss" scoped>
.param {
  margin-bottom: 1rem;
}
</style>
