import { defineStore } from "pinia";

export const rentStore = defineStore('Rent Store', {
  state: () => ({
    title: '<span class="yellow">Условия</span> аренды',
    cards: [
        {
            icon: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Rent%2Fpasport.png?alt=media&token=293937e4-546e-4201-bdf1-41d0e3fdea2f',
            name: 'Паспорт'
        },
        {
            icon: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Rent%2Fprava.png?alt=media&token=47e8375f-9b3c-410c-8744-9b849c5858cb',
            name: 'Водительское удостоверение'
        },
        {
            icon: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Rent%2Fage.png?alt=media&token=d0895716-0b5f-4e5c-a01e-9b2d8d24ca90',
            name: 'Возраст от 22 лет'
        },
        {
            icon: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Rent%2Fdrive.png?alt=media&token=f48d20c7-ce41-4a15-afca-ba16046d6532',
            name: 'Водительский стаж от 3 лет'
        },
    ],
    btnTxt: 'Договор аренды',
    img: {
      map: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Header%2Fheader-bg.png?alt=media&token=80c438c3-aead-45e9-8473-030d7fa2ed17',
      car: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Header%2Fheader-car.png?alt=media&token=70aacce0-d8fc-4811-bca4-bcce5ab6707d',
      bg: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Header%2Fcar-bg.png?alt=media&token=6c937b8c-b340-45a8-9085-3836f2ccec31'
    }
  })
})