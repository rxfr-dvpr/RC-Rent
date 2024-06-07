import { defineStore } from "pinia";

export const dashboardStore = defineStore('Dashboard Store', {
    state: () => ({
        title: '<span class="yellow">Аренда автомобиля</span>',
        options: [
            {
                optionName: 'Машина'
            }
        ],
        img: {
            bg: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Rent%2Frent-bg.png?alt=media&token=9b9e2924-a8eb-4918-8afb-daf70aa3a818'
        }
    })
})
