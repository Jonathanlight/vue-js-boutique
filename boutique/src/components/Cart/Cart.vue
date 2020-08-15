<template>
  <CartProductsList :cart="cart" class="p-3"></CartProductsList>
</template>

<script>
import CartProductsList from '../Cart/CartProductsList.vue'
import { eventBus } from '../../main.js'

export default {
  name: 'Cart',
  components: {
    CartProductsList
  },
  data(){
    return {
      cart: []
    }
  },
  created(){
    this.cart = eventBus.cart;
    eventBus.$on('update:cart', (cart) => {
      this.cart = cart;
    })
  }
}
</script>

<style>
</style>
