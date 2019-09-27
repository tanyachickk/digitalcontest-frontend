<template lang="pug">
  .vertical-menu
    router-link.menu-item(
      v-for="(item, index) in menuItems"
      active-class="menu-item_active"
      :key="index"
      :to="item.path"
    )
      i.menu-item__icon.material-icons {{ item.meta.icon }}
      span.menu-item__text {{ item.meta.title }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class VerticalMenu extends Vue {
  @Prop({ type: Array, default: () => [] })
  public routes!: any[];

  get menuItems() {
    return this.routes.filter(route => route.meta && route.meta.title);
  }
}
</script>

<style lang="scss" scoped>
.vertical-menu {
  .menu-item {
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    will-change: background-color, box-shadow, color;
    transition: box-shadow 0.2s ease, color 0.2s ease,
      background-color 0.2s ease;
    font-size: 0.85rem;
    border-bottom: 1px solid #e1e5eb;
    font-weight: 400;
    color: #3d5170;
    padding: 0.9375rem 1.5625rem;
    text-decoration: none;
    cursor: pointer;
    &_active,
    &:hover {
      box-shadow: inset 0.2rem 0 0 var(--primary);
      background-color: #fbfbfb;
      color: var(--primary);
      .menu-item__icon {
        color: var(--primary);
      }
    }
    &__icon {
      color: #cacedb;
      margin-right: 0.5rem;
      transition: color 0.2s ease;
      font-size: 1.125rem;
      will-change: color;
    }
  }
}
</style>
