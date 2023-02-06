<script>
    export default {
        name: "CardGenerator",
        props: {
            card: Object
        }

    }
</script>

<template>
    <div class="card">
        <img src="" class="card-img-top" alt="...">

        <div class="card-body">
            <h4 class="card-title">{{ card.name }}</h4>
        </div>

        <div class="card-body">
            <h6>Type</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>