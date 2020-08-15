import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
    data: {
        products: [{
                id: '1',
                img: 'https://www.cdiscount.com/pdt2/f/n/a/1/700x700/mpxw2fna/rw/macbook-pro-13-3-retina-avec-touch-bar-intel-co.jpg',
                title: 'MacBook Pro ',
                description: 'MacBook Pro 13" Retina (Mi-2017) - Core i7 2,3 GHz - SSD 256 Go - 8 Go AZERTY - Français',
                price: 1020,
            },
            {
                id: '2',
                img: 'https://image.darty.com/informatique/ordinateur_portable-portable/portable/asus_s530fai78256_s1902114645162A_165644137.jpg',
                title: 'Samsung DF74',
                description: 'Core i7 2,3 GHz - SSD 256 Go - 8 Go AZERTY - Français',
                price: 1500,
            },
            {
                id: '3',
                img: 'https://image.darty.com/informatique/ordinateur_portable-portable/portable/asus_s501uaej142i5_6_1_56_s1810194600916A_162748425.jpg',
                title: 'ASUS CORE MAX',
                description: 'MacBook Pro 13" Retina (Mi-2017) - Core i7 2,3 GHz - SSD 256 Go - 8 Go AZERTY - Français',
                price: 2300,
            }
        ],
        cart: []
    },
    methods: {
        addProductToCart(product) {
            if (!this.cart.map(i => i.id).includes(product.id)) {
                this.cart = [...this.cart, product];
                this.$emit('update:cart', this.cart.slice());
            }
        },
        removeItemFormCart(item) {
            this.cart = this.cart.slice().filter(i => i.id !== item.id);
            this.$emit('update:cart', this.cart.slice());
        }
    },
});

new Vue({
    render: h => h(App),
}).$mount('#app')