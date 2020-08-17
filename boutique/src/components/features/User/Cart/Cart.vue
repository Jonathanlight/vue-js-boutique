<template>
  <CartProductsList :cart="cart" class="p-3"></CartProductsList>
</template>

<script>
import CartProductsList from '../Cart/CartProductsList'
import { eventBus } from '../../../../main'

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
