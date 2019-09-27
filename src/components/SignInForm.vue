<template lang="pug">
  .sign-in
    //- img.sign-in__logo(src="~@/assets/images/gray-gorizontal.svg")
    .sign-in__control
      control-label Логин
      input-group(
        v-model="login"
      )
        i.material-icons person
    .sign-in__control
      control-label Пароль
      input-group(
        v-model="password"
        type="password"
      )
        i.material-icons lock
    .sign-in__footer
      basic-button(@click="signIn") Войти
      .sign-in__password-recovery Забыли пароль?
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InputGroup from "@/components/InputGroup.vue";
import ControlLabel from "@/components/FormControlLabel.vue";
import BasicButton from "@/components/BasicButton.vue";
import { signIn } from "@/api/login";

@Component({
  components: {
    InputGroup,
    ControlLabel,
    BasicButton
  }
})
export default class SignInForm extends Vue {
  private login: string = "1";
  private password: string = "2";

  private async signIn() {
    const result = await signIn(this.login, this.password);
    console.log(result);
    this.$router.replace("/");
  }
}
</script>

<style lang="scss" scoped>
.sign-in {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.875rem 1.875rem 0.8125rem;
  &__logo {
    width: 140px;
    margin-top: 1rem;
    margin-bottom: 0.7rem;
    align-self: center;
  }
  &__control {
    margin-bottom: 1rem;
  }
  i {
    font-size: 0.9rem;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  &__password-recovery {
    font-size: 0.8125rem;
    font-weight: 400;
    color: var(--primary);
    transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
    cursor: pointer;

    &:hover {
      color: var(--primary);
      text-decoration: underline;
    }
  }
}
</style>
