<template>
  <div class="d-flex flex-column p-5 card">
    <h5 class="border-bottom pb-3"> <i class="fa fa-cart-plus"></i> Mon Panier : </h5>
    <CartProductItem v-for="cart_item in cart" :key="cart_item.id" :cart_item="cart_item"></CartProductItem>
    <template v-if="cart.length">
      <hr class="w-100" />
      <span> Total : {{ total }}€ </span>
    </template>
  </div>
</template>

<script>
import CartProductItem from '../Cart/CartProductItem';

export default {
  components: {
    CartProductItem
  },
  props: ['cart'],
  computed: {
    total(){
      return this.cart.reduce((accumulator, v) => {
        accumulator += v.price;
        return accumulator;
      }, 0);
    }
  },
}
</script>

<style>
</style>
