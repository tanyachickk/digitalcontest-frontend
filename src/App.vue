<template lang="pug">
  .app
    router-view
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,500,600,700,800|Roboto:300&display=swap");
@import "~material-design-icons/iconfont/material-icons.css";
@import "reset-css";
@import "~@/styles/colors";

* {
  box-sizing: border-box;
}

.app {
  width: 100vw;
  height: 100vh;
  background-color: #f5f6f8;
  font-family: "Open Sans", sans-serif;
  overflow: hidden;
}
</style>