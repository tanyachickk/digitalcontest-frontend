<template lang="pug">
  .login-page
    .login-page__form
      login-form
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginForm from "@/components/LoginForm.vue";

@Component({
  components: {
    LoginForm
  }
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
.login-page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: auto;
  background-color: #f5f6f8;

  &__form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
