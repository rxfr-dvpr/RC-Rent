import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
  state: () => ({
    links: [
      {
        name: 'Наш парк',
        url: 'garage'
      },
      {
        name: 'Условия аренды',
        url: 'rent'
      },
      {
        name: 'Отзывы',
        url: 'reviews'
      },
      {
        name: 'Контакты',
        url: 'contacts'
      }
    ]
  })
})