<template lang="pug">
  .wrapper
    sidebar(:routes="routes")
    .main
      navbar
      router-view.content
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import { setToken } from "@/api/axios";

@Component({
  components: {
    Sidebar,
    Navbar
  }
})
export default class Main extends Vue {
  @Action("getData")
  getData;

  get routes() {
    return (this.$router as any).options.routes[1].children.filter(
      (item: any) => item.meta && item.meta.title
    );
  }

  private created() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace("/login");
      return;
    }
    setToken(token);
    this.getData();
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  background-color: #f5f6f8;
}
.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
}
.content {
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
}
</style>
