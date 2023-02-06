<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
    
    }
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
    height: 500px;
    background-color: #d48f38;
  }
</style>