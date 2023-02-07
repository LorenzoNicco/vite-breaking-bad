<script>
import CardGenerator from "./CardGenerator.vue";
import { store } from "../store.js";

import axios from "axios";

export default {
    name: "AppMain",
    components: {
        CardGenerator
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
        axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        .then ((response) => {
            this.store.cards = response.data.data.slice(0,20);
            console.log(this.store.cards);
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
    <div class="container">
        <form action="" class="p-3 d-flex" @submit.prevent="searchCards()">
            <select class="form-select w-25" id="floatingSelect" aria-label="Floating label select example"
             v-model="store.archetypeValue"
            >
                <option selected value="">Choose Archetype</option>
                <option v-for="item in store.archetypes" :value="item.archetype_name">{{ item.archetype_name }}</option>
            </select>

            <button type="submit" class="btn btn-primary ms-2">Submit</button>
        </form>
    </div>

    <div class="container bg-white p-5">
        <div class="row px-2">
            <div class="col-12 bg-dark text-white px-3 py-2">Found {{ store.cards.length }} cards</div>
        </div>

        <div class="row">
            <div class="col-2" v-for="item in store.cards">
                <CardGenerator :card="item"/>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
</style>