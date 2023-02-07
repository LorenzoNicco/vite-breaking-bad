<script>
    export default {
        name: "CardGenerator",
        props: {
            card: Object
        }


    }
</script>

<template>
    <div class="card my-bg-card my-card-heigth mb-3 border-0 rounded-0">
        <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">

        <div class="card-body">
            <h5 class="card-title text-white">{{ card.name }}</h5>
        </div>

        <div class="card-body">
            <h6>{{ card.type }}</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .my-bg-card {
        background-color: #d48f38;
    }

    .my-card-heigth {
        height: 400px;
    }
</style>