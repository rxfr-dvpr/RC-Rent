<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <h1 class="header-title all-title-clr" v-html="store.title"></h1>

            <div class="header__descr">
                <p class="header__descr-txt" v-for="(txt, idx) in store.txts" :key="idx">{{ txt }}</p>
            </div>

            <a href="#dashboard" class="header-btn all-btn">{{ store.btnTxt }}</a>

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
        font-size: calc(25px + 35 * (100vw / 1920));
    }

    &__descr {
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 50px;

        &-txt {
            font-size: calc(18px + 7 * (100vw / 1920));
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

@media (min-width: 1920px) {
    .header {
        &-title {
            font-size: 60px !important;
        }
    }
}

@media (max-width: 1375px) {
    .header {
        &-images {
            right: 0;
            max-width: 800px !important;
        }
    }
}

@media (max-width: 1115px) {
    .header {
        &-images {
            max-width: 700px !important;
        }
    }
}

@media (max-width: 992px) {
    .header {
        &-images {
            max-width: 600px !important;
        }
    }
}

@media (max-width: 886px) {
    .header {
        padding-top: 80px;

        &-map-img {
            top: 0;
        }

        .row {
            align-items: center;
        }

        &__descr {
            align-items: center;
            text-align: center;
            row-gap: 35px;
        }

        &-title {
            text-align: center;
        }
        &-images {
            max-width: 100% !important;
            position: relative;
        }
    }
}

@media (max-width: 556px) {
    .header {
        padding-top: 50px;
    }
}

</style>