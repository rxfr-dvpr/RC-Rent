import { defineStore } from "pinia";

export const reviewsStore = defineStore('Reviews Store', {
  state: () => ({
    title: '<span class="yellow">Отзывы</span>',
    slides: [
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Reviews%2Freview-1.png?alt=media&token=036ea7d5-4fa9-4128-9df2-3bce29ec3375'
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Reviews%2Freview-2.png?alt=media&token=075d3d96-9a15-4097-a75e-617238bc41ce'
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Reviews%2Freview-3.png?alt=media&token=ecde870d-ba47-4177-9853-1852e4857e47'
      },
    ],
    img: {
      car: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Reviews%2Freviews-car.png?alt=media&token=bede621f-d207-4b99-ab12-3916125cc63b'
    }
  })
})