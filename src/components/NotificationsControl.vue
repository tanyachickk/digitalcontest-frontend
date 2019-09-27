<template lang="pug">
  .notifications
    i.notifications__icon.material-icons notifications
    badge.notifications__count 5
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Badge from '@/components/Badge.vue';

@Component({
  components: {
    Badge,
  },
})
export default class NotificationsControl extends Vue {}
</script>

<style lang="scss" scoped>
.notifications {
  position: relative;
  &__icon {
    font-size: 1.5625rem;
    color: #c3c7cc;
  }

  &__count {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.5rem;
    transform: translate(50%, -25%);
  }
}
</style>
