<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store.js";

import axios from "axios";

export default {
  components: {
    AppHeader,
    AppMain
  },
  data () {
    return {
      store
    }
  },
  created () {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then ((response) => {
        this.store.cards = response.data.data.slice(0,20);
        console.log(this.cards);
      });
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