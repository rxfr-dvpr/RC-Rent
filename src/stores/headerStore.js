import { defineStore } from "pinia";

export const headerStore = defineStore('Header Store', {
  state: () => ({
    title: 'Аренда <span class="yellow">экслюзивных</span> авто в Крыму',
    txts: [
        'Доставка в любую точку Крыма',
        'Бесплатно доп. аксессуары',
        'Любой способ оплаты'
    ]
  })
})