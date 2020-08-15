<template>
  <div class="d-flex flex-row justify-content-between p-2 card mb-3">
    <p> <span> {{ cart_item.title }} </span> </p>
    <span> <strong> {{ cart_item.price }}€ </strong> </span>
    <button @click="removeItemFormCart" class="close">
      <i class="fa fa-trash" style="font-size:20px;color:red"></i> 
    </button>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'

export default {
  props: ['cart_item'],
  methods: {
    // {...this.cart_item} creer une copie de notre item
    removeItemFormCart(){
      eventBus.removeItemFormCart({...this.cart_item});
    }
  },
}
</script>

<style>
</style>