<script>
import CardGenerator from "./CardGenerator.vue";

    export default {
        name: "AppMain",
        components: {
            CardGenerator
        }

    }
</script>

<template>
    <div class="container">
        <form action="" class="p-3">
            <select class="form-select w-25" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </form>
    </div>

    <div class="container bg-white p-5">
        <div class="row">
            <div class="col-12 bg-dark text-white px-3 py-2">Found cards</div>
        </div>

        <div class="row">
            <CardGenerator class="col-2 mb-2"/>
        </div>
    </div>

</template>

<style lang="scss" scoped>
</style>