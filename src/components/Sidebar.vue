<template lang="pug">
  .sidebar
    .logo
      img.logo__img(src="~@/assets/gray-gorizontal.svg" width="170px")
    vertical-menu(:routes="routes")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VerticalMenu from "@/components/VerticalMenu.vue";

@Component({
  components: {
    VerticalMenu
  }
})
export default class Sidebar extends Vue {
  @Prop({ type: Array, default: () => [] })
  public routes!: any[];
}
</script>

<style lang="scss" scoped>
.sidebar {
  flex-shrink: 0;
  position: relative;
  width: 280px;
  border-right: 1px solid #e1e5eb;
  box-shadow: 0 0.125rem 9.375rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.5rem rgba(90, 97, 105, 0.12),
    0 0.9375rem 1.375rem rgba(90, 97, 105, 0.1),
    0 0.4375rem 2.1875rem rgba(165, 182, 201, 0.1);
  z-index: 1;
  background-color: white;
}
.logo {
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  border-bottom: 1px solid #e1e5eb;
  &__img {
    width: 120px;
    margin: 15px 1.75rem;
  }
}
</style>
