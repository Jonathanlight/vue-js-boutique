<template>
  <ShopProductsList :products="products" class="p-3"></ShopProductsList>
</template>

<script>
import ShopProductsList from '../Shop/ShopProductsList.vue';


export default {
  name: 'Shop',
  props: ['products'],
  components: {
    ShopProductsList
  }
}
</script>

<style>
</style>
