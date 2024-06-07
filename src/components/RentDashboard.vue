<template>
  <section class="dashboard__section">
    <div class="container">
        <div class="row">
            <div class="dashboard-panel">
                <h2 class="dashboard-title all-title-clr" v-html="store.title"></h2>
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
    }
}

</style>