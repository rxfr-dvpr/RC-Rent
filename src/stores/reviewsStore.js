import { defineStore } from "pinia";

export const reviewsStore = defineStore('Reviews Store', {
  state: () => ({
    title: '<span class="yellow">Отзывы</span>',
    slider: [
        {
            img: ''
        }
    ]
  })
})