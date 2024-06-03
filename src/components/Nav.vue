<template>
  <nav class="nav" :class="{'blur': bgBlur}">
    <div class="container">
        <div class="row">
            <router-link to="/" class="nav-logo">
                <img :src="logoImg" alt="" class="nav-logo-img">
            </router-link>

            <ul class="nav__list">
                <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
                    <router-link :to="link.url" class="nav__list-link">{{ link.name }}</router-link>
                </li>
            </ul>

            <a href="tel:+998998173066" class="contact-num">+998 99 817 30 66</a>
        </div>
    </div>
  </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";

export default {
    name: 'Nav',
    data() {
        return {
            logoImg: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/logo.png?alt=media&token=c4d5e6aa-2467-425b-b5ff-145d3c437601',
            store: navStore(),
            bgBlur: false
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                this.bgBlur = true
            } else {
                this.bgBlur = false
            }
        })
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    padding: 35px 0;
    z-index: 2024;

    .row {
        justify-content: space-between;
        align-items: center;
    }

    &__list {
        max-width: 750px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        &-link {
            font-size: 18px;
            color: var(--main-gray);

            &:hover {
                color: var(--main-yellow);
            }
        }
    }

    .contact-num {
        color: var(--main-white);

        &:hover {
            color: var(--main-yellow);
        }
    }

    &.blur {
        backdrop-filter: blur(10px);
    }
}

</style>