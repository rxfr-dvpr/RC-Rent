<template>
  <section class="reviews__section" id="reviews">
    <div class="container">
        <div class="row">
            <h2 class="reviews-title all-title-clr" v-html="store.title"></h2>

            <div class="reviews__slides">
                <div class="reviews__slides-slide" v-for="(slide, idx) in store.slides" :key="idx">
                    <img :src="slide.img" alt="" class="slide-img">
                </div>
            </div>

            <img :src="store.img.car" alt="" class="reviews-car-img">
        </div>
    </div>
  </section>
</template>

<script>
import { reviewsStore } from "@/stores/reviewsStore.js";

export default {
    name: 'Reviews',
    data() {
        return {
            store: reviewsStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.reviews__section {
    width: 100%;
    padding: 80px 0 300px;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 90px;
        position: relative;
    }

    .reviews__slides {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 70px;
        flex-wrap: wrap;

        &-slide {
            max-width: 267px;
            width: 100%;

            .slide-img {
                width: 100%;
                pointer-events: none;
            }
        }
    }

    .reviews-car-img {
        position: absolute;
        top: 10%;
        right: -20%;
        z-index: -1;
    }
}

@media (max-width: 1650px) {
    .reviews-car-img {
        max-width: max-content;
        width: 100%;
        right: 0 !important;
    }
}

</style>