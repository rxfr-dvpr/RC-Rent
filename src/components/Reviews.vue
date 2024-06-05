<template>
  <section class="reviews__section">
    <div class="container">
        <div class="row">
            <h2 class="reviews-title all-title-clr" v-html="store.title"></h2>
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
    }
}

</style>