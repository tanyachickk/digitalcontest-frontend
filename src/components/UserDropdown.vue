<template lang="pug">
  .user-dropdown
    .user-dropdown__link(@click="logout")
      i.material-icons.user-dropdown__icon exit_to_app
      span Выйти
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class UserDropdown extends Vue {
  private logout() {
    localStorage.removeItem("token");
    this.$router.replace("/login");
  }
}
</script>

<style lang="scss" scoped>
.user-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.11), 0 3px 10px rgba(0, 0, 0, 0.05),
    0 2px 3px rgba(0, 0, 0, 0.06);
  padding: 0.25rem 0;
  font-size: 0.813rem;
  color: #5a6169;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0 0 0.375rem 0.375rem;
  padding: 0.25rem 0;
  z-index: -1;

  &__divider {
    margin: 0.25rem 0;
    border-top: 1px solid #e9ecef;
  }

  &__icon {
    font-size: 0.75rem;
    width: 0.9rem;
    margin-right: 0.5rem;
    vertical-align: middle;
    color: #c3c7cc;
    &.user-icon {
      font-size: 0.9rem;
    }
  }

  &__link {
    padding: 0.375rem 0.875rem;
    font-size: 0.813rem;
    font-weight: 300;
    color: #212529;
    transition: background-color 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
      color 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);

    &:hover {
      background-color: #fafafb;
      color: #16181b;
    }

    span {
      vertical-align: middle;
    }
  }
}
</style>
