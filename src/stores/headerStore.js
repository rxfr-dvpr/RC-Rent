import { defineStore } from "pinia";

export const headerStore = defineStore('Header Store', {
  state: () => ({
    title: 'Аренда <span class="yellow">экслюзивных</span> авто в Крыму',
    txts: [
        'Доставка в любую точку Крыма',
        'Бесплатно доп. аксессуары',
        'Любой способ оплаты'
    ],
    btnTxt: 'Выбрать авто',
    img: {
      map: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Header%2Fheader-bg.png?alt=media&token=80c438c3-aead-45e9-8473-030d7fa2ed17',
      car: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Header%2Fheader-car.png?alt=media&token=70aacce0-d8fc-4811-bca4-bcce5ab6707d',
      bg: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Header%2Fcar-bg.png?alt=media&token=6c937b8c-b340-45a8-9085-3836f2ccec31'
    }
  })
})