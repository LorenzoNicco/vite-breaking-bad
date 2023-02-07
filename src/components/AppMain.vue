<script>
import CardGenerator from "./CardGenerator.vue";
import AppLoader from "./AppLoader.vue";
import { store } from "../store.js";

import axios from "axios";

export default {
    name: "AppMain",
    components: {
        CardGenerator,
        AppLoader
    },
    data () {
        return {
            store
        }
    },
    methods: {
        searchCards () {
            axios
            .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
                params: {
                    archetype: this.store.archetypeValue
                }
            })
            .then ((response) => {
                this.store.cards = response.data.data.slice(0,20);
                console.log(this.store.cards);
            })
        },
        resetSearch() {
            this.store.archetypeValue = "";

            this.searchCards();
        }
    },
    created () {

        this.store.loading = true;

        axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        .then ((response) => {
            this.store.cards = response.data.data.slice(0,20);
            console.log(this.store.cards);

            this.store.loading = false;
        });

        axios
        .get("https://db.ygoprodeck.com/api/v7/archetypes.php")
        .then ((response) => {
            this.store.archetypes = response.data.slice(0,20);
            console.log(this.store.archetypes);
        });
    }
}
</script>

<template>
    <div class="container">  <!-- inizio form-->
        <form action="" class="p-3 d-flex">
            <select class="form-select w-25" id="floatingSelect" aria-label="Floating label select example"
             v-model="store.archetypeValue"
             @change="searchCards()"
            >   
                <!--soluzione 2: tolto @submit e inserito @change per far partire il filtraggio delle carte al cambio di option selezionata-->

                <option selected value="">Choose Archetype</option>
                <option v-for="item in store.archetypes" :value="item.archetype_name">{{ item.archetype_name }}</option>
            </select>

            <!-- souzione 1: i bottoni commentati, insieme al @submit nel tag form, fanno partire il filtraggio delle carte -->
            <!-- <button type="submit" class="btn btn-primary ms-2">Submit</button>

            <button type="reset" class="btn btn-warning ms-2" @click="resetSearch()">Reset</button> -->
        </form>
    </div>  <!-- fine form-->

    <div class="container bg-white p-5 my-min-heigth">
        <div class="row px-2">
            <div class="col-12 bg-dark text-white px-3 py-2">Found {{ store.cards.length }} cards</div>
        </div>

        <div class="row">   <!-- inizio sezione carte-->
            <AppLoader v-if="store.loading == true"/>
            <div v-else class="col-2" v-for="item in store.cards">
                <CardGenerator :card="item"/>
            </div>
        </div>  <!-- fine sezione carte-->
    </div>

</template>

<style lang="scss" scoped>
    .my-min-heigth {
        min-height: 300px;
    }
</style>