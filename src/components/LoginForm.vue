<template lang="pug">
  card.login-form
    .login-form__header
      img(src="~@/assets/white-horizontal.svg" width="170px")
    .login-form__body
      sign-in-form
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import SignInForm from "@/components/SignInForm.vue";

@Component({
  components: {
    Card,
    SignInForm
  }
})
export default class LoginForm extends Vue {}
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 300px;
  margin-bottom: 5rem;
  flex-shrink: 0;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: var(--accent-blue);
  }

  &__body {
    flex-grow: 1;
  }
}
</style>
