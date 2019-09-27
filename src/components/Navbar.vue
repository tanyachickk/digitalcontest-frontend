<template lang="pug">
  .navbar
    .navbar__search.search
      i.search__icon.material-icons search
      input.search__input(placeholder="Поиск...")
    .navbar__notifications
      notifications-control
    .navbar__user
      user-info
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NotificationsControl from '@/components/NotificationsControl.vue';
import UserInfo from '@/components/UserInfo.vue';

@Component({
  components: {
    NotificationsControl,
    UserInfo,
  },
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  display: flex;
  align-items: stretch;
  flex-shrink: 0;
  height: 60px;
  padding: 0;
  background-color: white;
  box-shadow: 0 0.125rem 0.625rem rgba(90, 97, 105, 0.12);
  // z-index: 1;

  &__search {
    flex-grow: 1;
    margin-right: auto;
    padding-left: 1rem;
    border-right: 1px solid #e1e5eb;
  }

  .search {
    position: relative;
    &__icon {
      position: absolute;
      top: 50%;
      left: 1.5rem;
      color: #abb6bf;
      font-size: 1.1rem;
      transform: translateY(-50%);
    }
    &__input {
      width: 100%;
      height: 100%;
      padding: 0.4rem 0.75rem;
      padding-left: 2rem;
      color: #495057;
      font-size: 0.8125rem;
      font-weight: 300;
      line-height: 100%;
      border: none;
      outline: none;
    }
  }

  &__notifications {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 60px;
    border-right: 1px solid #e1e5eb;
    background-color: white;
    cursor: pointer;
  }

  &__user {
    position: relative;
    flex-shrink: 0;
    min-width: 100px;
    max-width: 320px;
    background-color: white;
    cursor: pointer;
  }
}
.slide {
  &-enter-to,
  &-leave-to {
    transition: all 0.2s ease;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>
