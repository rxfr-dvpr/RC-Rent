<template>
  <section class="rent__section">
    <div class="container">
        <div class="row">
            <h2 class="rent-title all-title-clr" v-html="store.title"></h2>

            <div class="rent__cards">
                <div class="rent__cards-item" v-for="(card, idx) in store.cards" :key="idx">
                    <img :src="card.icon" alt="" class="rent-icon">

                    <p class="rent-name">{{ card.name }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { rentStore } from "@/stores/rentStore.js";

export default {
    name: 'Rent Section',
    data() {
        return {
            store: rentStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.rent__section {
    width: 100%;
    padding-top: 90px;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 130px;
    }

    .rent-title {
        font-size: 48px;
    }

    .rent__cards {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-item {
            max-width: 200px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 30px;
            align-items: center;
            text-align: center;
            
            .rent-icon {
                max-width: max-content;
                width: 100%;
            }

            .rent-name {
                font-size: 22px;
            }
        }
    }
}

</style>