<template>
  <div class="w-25 border-left m-2 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 150px;" :src="product.img">
    </div>

    <div>
      <h5> {{ product.title }} </h5> <hr/>
    </div>

    <div>
      <p> {{ product.description }} </p>
    </div>

    <div>
      <span class="font-weight-bold h4"> {{ product.price }} </span>
      <button @click="addProductToCart" class="btn btn-primary btn-sm float-right"> <i class="fa fa-user"></i> Commander </button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../../../main.js'

// {...object} decomposition de l'objet pour avoir une copie parfaite avec tout les clés

export default {
  props: [ 'product' ],
  methods: {
    addProductToCart(){
      eventBus.addProductToCart({...this.product});
    }
  },
}
</script>

<style>
.product-container{
  height: 400px;
}

p{
  font-size: 12px;;
}
</style>
