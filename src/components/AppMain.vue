<script>
import CardGenerator from "./CardGenerator.vue";

    export default {
        name: "AppMain",
        components: {
            CardGenerator
        },
        props: {
            cardCount: {
                type: Number,
                default: 0
            },
            cardsList: {
                type: Array,
                default: []
            }
        }
    }
</script>

<template>
    <div class="container">
        <form action="" class="p-3">
            <select class="form-select w-25" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Spell Card</option>
                <option value="1">Effect Monster</option>
                <option value="2">Normal Monster</option>
                <option value="3">Flip Effect Monster</option>
                <option value="4">Trap Card</option>
            </select>
        </form>
    </div>

    <div class="container bg-white p-5">
        <div class="row px-2">
            <div class="col-12 bg-dark text-white px-3 py-2">Found {{ cardCount }} cards</div>
        </div>

        <div class="row">
            <div class="col-2" v-for="item in cardsList">
                <CardGenerator :card="item"/>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
</style>