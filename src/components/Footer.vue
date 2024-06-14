<template>
  <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer__info">
                <a href="" class="footer-logo">
                    <img :src="store.logoImg" alt="" class="footer-logo-img">
                </a>

                <p class="footer__info-subtitle">{{ store.info.sub }}</p>

                <p class="footer__info-descr" v-html="store.info.descr"></p>
            </div>

            
        </div>
    </div>
  </footer>
</template>

<script>
import { footerStore } from "@/stores/footerStore.js";

export default {
    name: 'Footer',
    data() {
        return {
            store: footerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    padding: 45px 0 35px;

    .footer__info {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 34px;
    }

    .footer-logo {
        max-width: 200px;
        width: 100%;
        display: block;

        &-img {
            width: 100%;
        }
    }
}

</style>