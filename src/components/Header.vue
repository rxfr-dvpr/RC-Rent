<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <h1 class="header-title">{{ store.title  }}</h1>

            <div class="header__descr">
                <p class="header__descr-txts" v-for="(txt, idx) in store.txts" :key="idx">{{ txt }}</p>
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
    }

    &-title {
        font-size: 60px;
        font-weight: 700;
    }

    &__descr {
        max-width: 430px;
        width: 100%;
    }
}

</style>