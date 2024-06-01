<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <h1 class="header-title" v-html="store.title"></h1>

            <div class="header__descr">
                <p class="header__descr-txt" v-for="(txt, idx) in store.txts" :key="idx">{{ txt }}</p>
            </div>

            <button class="header-btn all-btn">{{ store.btnTxt }}</button>

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
    }

    &-title {
        font-size: 60px;
        font-weight: 700;
        font-style: italic;
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
}

</style>