<template>
  <CartProductsList :cart="cart" class="p-3"></CartProductsList>
</template>

<script>
import CartProductsList from '../Cart/CartProductsList'

export default {
  name: 'Cart',
  props: ['cart'],
  components: {
    CartProductsList
  }
}
</script>

<style>
</style>
