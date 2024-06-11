import { defineStore } from "pinia";

export const dashboardStore = defineStore('Dashboard Store', {
    state: () => ({
        title: '<span class="yellow">Аренда автомобиля</span>',
        selects: [
            {
                optionName: 'Машина',
                type: '',
                options: [
                    'BMW i325',
                    'BMW 320',
                    'BMW Z4',
                    'BMW 420D',
                    'Mercedes С180',
                    'Mercedes Viano',
                    'KIA K5',
                    'KIA RIO',
                    'Volkswagen Touareg',
                ]
            },
            {
                optionName: 'Место получения',
                options: [
                    '9121 Thad Landing Suite',
                    '850 Alanna Courts',
                    '314 Cole Forest Apt. 586',
                    '999 Brianne Corners Suite',
                    '212 Mitchell Heights',
                    '391 Elenor Ford Apt',
                    '4961 Hane Falls Apt',
                ]
            },
            {
                optionName: 'Место возврата',
                options: [
                    '9121 Thad Landing Suite',
                    '850 Alanna Courts',
                    '314 Cole Forest Apt. 586',
                    '999 Brianne Corners Suite',
                    '212 Mitchell Heights',
                    '391 Elenor Ford Apt',
                    '4961 Hane Falls Apt',
                ]
            },
        ],
        img: {
            bg: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Rent%2Frent-bg.png?alt=media&token=9b9e2924-a8eb-4918-8afb-daf70aa3a818'
        },
        btnTxt: 'Далее',
        modalTxt: 'Спасибо за ваш заказ :)'
    })
})
