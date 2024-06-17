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

            <div class="footer__list">
                <div class="footer__list-info" v-for="(info, idx) in store.list" :key="idx">
                    <p class="info-name">{{ info.name }}</p>

                    <p class="info-txt" v-for="txt in info.txts" :key="txt">{{ txt }}</p>
                </div>
            </div>

            <div class="footer__socials">
                <p class="footer__socials-name">{{ store.socials.name }}:</p>

                <div class="footer__socials-list">
                    <a :href="icon.url" class="socials-list-item" v-for="(icon, idx) in store.socials.links" 
                    :key="idx" v-html="icon.icon"></a>
                </div>
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

    .row {
        justify-content: space-between;
        align-items: center;
    }

    &__info {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 34px;
    }

    &-logo {
        max-width: 200px;
        width: 100%;
        display: block;

        &-img {
            width: 100%;
        }
    }

    &__list {
        max-width: max-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        justify-content: center;

        &-info {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
        }
    }

    &__socials {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        align-items: center;

        &-name {
            font-size: 20px;
        }

        &-list {
            max-width: max-content;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 50px;

            
        }
    }
}

</style>