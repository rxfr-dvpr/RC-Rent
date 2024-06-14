import { defineStore } from "pinia";

export const footerStore = defineStore('Footer Store', {
  state: () => ({
    logoImg: 'https://firebasestorage.googleapis.com/v0/b/rc-rent-7f09a.appspot.com/o/Footer%2Ffooter-logo.png?alt=media&token=da7cf9df-3e18-4f35-b958-63d859a92c82',
    info: {
        sub: 'Мы являемся лидерами аренды эксклюзивных автомобилей в Крыму',
        descr: 'Индивидуальный предприниматель <br> Белоножко Сергей Александрович <br> ИНН 910312245536 <br> ОГРНИП 320911200093781' 
    }
  })
})