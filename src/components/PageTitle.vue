<template lang="pug">
  h1.title
    slot {{ $route.meta && $route.meta.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PageTitle extends Vue {}
</script>

<style lang="scss" scoped>
.title {
  color: #3d5170;
  font-size: 1.625rem;
  font-weight: 500;
  padding: 1.5rem 0 1rem 2rem;
}
</style>
