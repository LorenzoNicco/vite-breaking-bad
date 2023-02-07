<script>

export default {
    name:"AppLoader"
}
</script>

<template>
    <!-- <section class="d-flex justify-content-center align-items-center py-5">
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </section> -->

    <div class="my-container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</template>

<style lang="scss" scoped>
.my-container {
    position: relative;
    margin: 50px auto 0;
    width: 300px;
}
.circle {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: black;
    left: 15%;
    transform-origin: 50%;
    animation: circle 0.5s alternate infinite ease;
}

@keyframes circle {
    0% {
        top: 60px;
        height: 5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
    }

    40% {
        height: 20px;
        border-radius: 50%;
        transform: scaleX(1);
    }

    100% {
        top: 0%;
    }
}

.circle:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
}

.circle:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
}
</style>