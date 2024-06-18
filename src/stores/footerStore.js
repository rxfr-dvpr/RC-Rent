import { defineStore } from "pinia";

export const footerStore = defineStore('Footer Store', {
  state: () => ({
    logoImg: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Footer%2Ffooter-logo.png?alt=media&token=da7cf9df-3e18-4f35-b958-63d859a92c82',
    info: {
        sub: 'Мы являемся лидерами аренды эксклюзивных автомобилей в Крыму',
        descr: 'Индивидуальный предприниматель <br> Белоножко Сергей Александрович <br> ИНН 910312245536 <br> ОГРНИП 320911200093781' 
    },
    list: [
      {
        name: 'Адрес:',
        txts: [
          'г. Ялта, ул. Набережная им. В.И. Ленина, 3'
        ]
      },
      {
        name: 'Телефон:',
        txts: [
          '+998 (99) 817-30-66',
          '+998 (99) 817-30-66'
        ]
      },
    ],
    socials: {
      name: 'Социальные сети',
      links: [
        {
          icon: '<i class="fab fa-instagram"></i>',
          url: 'https://www.instagram.com/rxfr_dvpr/'
        },
        {
          icon: '<i class="fab fa-telegram"></i>',
          url: 'https://t.me/rxfr_dvpr'
        }
      ],
      policy: 'Политика конфеденциальности'
    }
  })
})