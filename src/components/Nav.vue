<template>
  <nav class="nav" :class="{'blur': bgBlur}">
    <div class="container">
        <div class="row">
            <router-link to="/" class="nav-logo">
                <img :src="logoImg" alt="" class="nav-logo-img">
            </router-link>

            <div class="nav__wrapper" :class="{'opened': navOpened}">
                <ul class="nav__list" @click.self="navOpened = false">
                    <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
                        <a :href="link.url" class="nav__list-link" @click="navOpened = false">{{ link.name }}</a>
                    </li>
                </ul>
            </div>

            <a href="tel:+998998173066" class="contact-num">+998 99 817 30 66</a>

            <button class="nav-mb-btn" @click="navOpened = !navOpened"><i class="fal fa-bars"></i></button>
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
            bgBlur: false,
            navOpened: false
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
        gap: 20px;
    }

    &-logo {
        max-width: max-content;

        img {
            width: 100%;
        }
    }

    &__wrapper {
        max-width: 750px;
        width: 100%;
    }

    &__list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 15px;

        &-link {
            font-size: 18px;
            color: var(--main-gray);
            min-width: max-content;

            &:hover {
                color: var(--main-yellow);
            }
        }
    }

    .contact-num {
        min-width: max-content;
        color: var(--main-white);

        &:hover {
            color: var(--main-yellow);
        }
    }

    &.blur {
        padding: 20px 0 !important;
        backdrop-filter: blur(20px);
    }

    &-mb-btn {
        display: none;
        width: 35px;
        height: 35px;
        border: 0;
        background: transparent;
        justify-content: center;
        align-items: center;
        font-size: 25px;
    }
}

@media (max-width: 992px) {
    .nav {

        padding: 25px 0;
        &__wrapper {
            max-width: max-content;
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            padding: 0 15px;
            background: var(--main-yellow);
            transform: translateX(-120%);
            transition: .7s;

            &.opened {
                transform: translateX(0%);
            }
        }

        &__list {
            flex-direction: column;
            height: 100%;
            justify-content: center;

            &-link {
                color: var(--main-dark);
                font-weight: 600;

                &:hover {
                    color: var(--main-white) !important;
                }
            }
        }

        &-mb-btn {
            display: flex;
        }
    }
}

@media (max-width: 556px) {
    .nav-logo {
        max-width: 80px !important;
    }
}

</style>