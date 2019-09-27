<template lang="pug">
  .user-info
    img.user-info__avatar(src="http://www.drreddyforlife.com/wp-content/uploads/2018/05/user-placeholder-1.jpg" alt="User Avatar")
    .user-info__name {{ name }}
    i.user-info__arrow-icon.material-icons(
    ) arrow_drop_down
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserInfo extends Vue {
  @Prop({ type: String, default: 'Администратор' })
  private name!: string;
}
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  padding: 0 0.625rem;
  height: 100%;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8125rem;
  transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);

  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }

  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  &__name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__arrow-icon {
    font-size: 1.35rem;
    transition: transform 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);

    &.open {
      transform: rotate(180deg);
    }
  }
}
</style>
