<template>
  <section class="dashboard__section">
    <div class="container">
        <div class="row">
            <div class="dashboard-panel">
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
            </div>


            <img :src="store.img.bg" alt="" class="dashboard-bg">
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
            store: dashboardStore()
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
        padding: 60px 0 35px;

        &-btn {
            padding: 8px 70px;
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
            font-size: 24px;
            cursor: pointer;
            padding-left: 18px;
            font-weight: 600;

            option {
                color: #0C0C0B;
                cursor: pointer;
            }

            &.select-1 {
                max-width: 100% !important;
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
}

</style>