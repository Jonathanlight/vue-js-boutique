<template>
  <div class="d-flex flex-row justify-content-between p-2 card mb-3">
    <p> <span> {{ cart_item.title }} </span> </p>
    <span> <strong> {{ cart_item.price }}€ </strong> </span>
    <button @click="deleteOne(cart_item.id)" class="close">
      <i class="fa fa-trash" style="font-size:20px;color:red"></i>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['cart_item'],
  methods: {
    ...mapMutations('cart', ['deleteOne'])
  },
}
</script>

<style>
</style>
