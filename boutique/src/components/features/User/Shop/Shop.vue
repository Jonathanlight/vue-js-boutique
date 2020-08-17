<template>
  <ShopProductsList :products="products" class="p-3"></ShopProductsList>
</template>

<script>
import ShopProductsList from '../Shop/ShopProductsList.vue'
import { eventBus } from '../../../../main.js'

export default {
  name: 'Shop',
  components: {
    ShopProductsList
  },
  data(){
    return {
      products: []
    }
  },
  created(){
    this.products = eventBus.products;
    eventBus.$on('update:products', (products) => {
      this.products = products;
    })
  }
}
</script>

<style>
</style>
