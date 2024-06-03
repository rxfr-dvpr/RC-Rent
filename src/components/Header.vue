<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <h1 class="header-title all-title-clr" v-html="store.title"></h1>

            <div class="header__descr">
                <p class="header__descr-txt" v-for="(txt, idx) in store.txts" :key="idx">{{ txt }}</p>
            </div>

            <button class="header-btn all-btn">{{ store.btnTxt }}</button>

            <img :src="store.img.map" alt="" class="header-map-img">

            <div class="header-images">
                <img :src="store.img.car" alt="" class="header-car-img">

                <img :src="store.img.bg" class="car-bg-img">
            </div>
        </div>
    </div>
  </header>
</template>

<script>
import { headerStore } from "@/stores/headerStore.js";

export default {
    name: 'Header',
    data() {
        return {
            store: headerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding-top: 130px;

    .row {
        flex-direction: column;
        row-gap: 50px;
        position: relative;
    }

    &-title {
        font-size: 60px;
    }

    &__descr {
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 50px;

        &-txt {
            font-size: 25px;
            font-weight: 600;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    &-map-img {
        max-width: 100%;
        width: 100%;
        position: absolute;
        top: -30%;
        left: 0;
        z-index: -1;
        pointer-events: none;
    }

    &-images {
        max-width: 900px;
        width: 100%;
        position: absolute;
        top: 20%;
        right: -8%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .header-car-img {
            width: 80%;
            pointer-events: none;
        }

        .car-bg-img {
            position: absolute;
            top: -35%;
            left: 0;
            width: 100%;
            z-index: -1;
        }
    }
}

</style>