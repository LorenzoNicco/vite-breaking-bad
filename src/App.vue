<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppMain />
   </main>
</template>

<style lang="scss">
  @import "./styles/main.scss";
  
  main {
    width: 100%;
    padding-bottom: 3rem;
    background-color: #d48f38;
  }
</style>