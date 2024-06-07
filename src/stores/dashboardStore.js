import { defineStore } from "pinia";

export const dashboardStore = defineStore('Dashboard Store', {
    state: () => ({
        title: '<span class="yellow">Аренда автомобиля</span>',
        options: [
            {
                optionName: 'Машина'
            }
        ]
    })
})
