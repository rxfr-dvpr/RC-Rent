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
            max-width: 43.5%;
            width: 100%;
            color: #0C0C0B;
            outline: none;
            padding-left: 55px;
            font-size: 24px;
            cursor: pointer;

            option {
                color: #0C0C0B;
                cursor: pointer;
            }

            &.select-1 {
                max-width: 100% !important; 
            }
        }
    }
}

</style>