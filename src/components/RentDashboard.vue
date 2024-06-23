<template>
  <section class="dashboard__section" id="dashboard">
    <div class="container">
        <div class="row">
            <form class="dashboard-panel" @submit.prevent="modalOpened = true">
                <h2 class="dashboard-title all-title-clr" v-html="store.title"></h2>

                <div class="dashboard-options">
                    <select name="" id="" v-for="(select, idx) in store.selects" :key="idx" :class="`all-select select-${idx + 1}`">
                        <option :value="select.optionName" selected disabled class="all-option">{{ select.optionName }}</option>

                        <option :value="option" v-for="(option, idd) in select.options" class="all-option"
                        :key="idd">{{ option }}</option>
                    </select>

                    <div class="option-box">
                        <label for="gdate">Дата получения:</label>

                        <input type="date" id="gdate" class="all-select get-date">
                    </div>

                    <div class="option-box">
                        <label for="rdate">Дата возврата:</label>

                        <input type="date" class="all-select return-date" id="rdate">
                    </div>


                    <div class="option-box">
                        <label for="gtime">Время получения:</label>

                        <input type="time" class="all-select get-time" id="gtime">
                    </div>

                    <div class="option-box">
                        <label for="rtime">Время возврата:</label>

                        <input type="time" class="all-select return-time" id="rtime">
                    </div>

                </div>

                <button class="dashboard-panel-btn all-btn">{{ store.btnTxt }}</button>
            </form>

            <img :src="store.img.bg" alt="" class="dashboard-bg">

            <div class="order-modal" :class="{'opened': modalOpened}" @click.self="modalOpened = false">
                <p class="order-modal-txt">{{ store.modalTxt }}</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { dashboardStore } from "@/stores/dashboardStore.js";

export default {
    name: 'Rent Dashboard Section',
    data() {
        return {
            store: dashboardStore(),
            modalOpened: false
        }
    }
}

</script>

<style lang="scss" scoped>

.dashboard__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .dashboard-panel {
        max-width: 815px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 75px;
        align-items: center;
        background: #050C14;
        border: solid 1px #888888;
        border-radius: 20px;
        padding: 50px 30px 30px;

        &-btn {
            padding: 8px 70px;
        }

        .dashboard-title {
            text-align: center;
        }
    }

    .dashboard-bg {
        max-width: 100%;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }

    .dashboard-options {
        max-width: 640px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 30px;
        column-gap: 80px;
        justify-content: center;

        .all-select {
            width: 100%;
            color: #0C0C0B;
            outline: none;
            font-size: calc(15px + 5 * (100vw / 1920));
            cursor: pointer;
            padding-left: 18px;
            font-weight: 600;
            border: 0;

            option {
                font-size: calc(13px + 2 * (100vw / 1920));
                font-weight: 500;
                color: #0C0C0B;
                cursor: pointer;
            }

            &.select-1 {
                max-width: 100%;
                padding-left: 55px;
            }

            &.select-2,&.select-3 {
                max-width: 43.5%;
                width: 100%;    
            }
        }

        .option-box {
            max-width: 43.5%;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 5px;

            label {
                font-size: 13px;
                cursor: pointer;
            }
        }
    }

    .order-modal {
        max-width: 700px;
        width: 100%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px #5DBDB3;
        background: var(--main-yellow);
        z-index: 2020;
        transition: .4s;

        &-txt {
            font-size: 45px;
            font-weight: 700;
            color: var(--main-dark);
        }

        &.opened {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
}

@media (min-width: 1920px) {
    .all-select {
        font-size: 20px !important;

        option {
            font-size: 15px !important;
        }
    }
}

@media (max-width: 710px) {
    .dashboard-options {
        column-gap: 30px !important;

        .all-select {
            &.select-1 {
                max-width: 92% !important;
            }
        }
    }
}

@media (max-width: 600px) {
    .dashboard-options {
        flex-direction: column;
        align-items: center;

        .all-select {
            &.select-1, &.select-2, &.select-3 {
                max-width: 400px !important;
            }
        }

        .option-box {
            max-width: 400px !important;
        }
    }
}

</style>