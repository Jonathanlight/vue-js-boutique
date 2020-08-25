<template>
  <form @submit="submitForm" class="d-flex flex-column card p-3">
    <h4>Ajouter un produit :</h4>
    <hr class="w-100" />

    <div class="form-group">
      <label>  </label>
      <input type="name" v-model.lazy="form.title" name="" id="" class="form-control" placeholder="Nom du Produit" />
    </div>

    <div class="form-group">
      <label>  </label>
      <textarea name="" v-model.lazy="form.description" id="" class="form-control" placeholder="Description du Produit"></textarea>
    </div>

    <div class="form-group">
      <label>  </label>
      <input type="number" v-model.number.lazy="form.price" min="0.00" max="10000.00" step="0.01" name="" id="" class="form-control" placeholder="Prix du Produit" />
    </div>

    <div class="form-group">
      <label>  </label>
      <input type="text" v-model="form.img" name="" id="" class="form-control" placeholder="Image du Produit" />
    </div>

    <ul v-if="errors.length" class="card alert-danger">
        <li v-for="error in errors" :key="error"> {{ error }} </li>
      </ul>

    <div class="form-group">
      <button class="btn btn-primary btn-block" type="submit"> Ajouter </button>
    </div>

    <pre> {{ form }} </pre>

  </form>
</template>

<script>
import { eventBus } from '../../../main';

export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        price: '',
        img: ''
      },
      errors: []
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      this.formIsValid().then( () => {
        eventBus.addProduct({...this.form});
        this.resetForm();

        this.$router.push('/shop');
      }).catch( () => {
        console.log( this.errors )
      } )

    },
    resetForm() {
      this.form = {
        title: '',
        description: '',
        price: '',
        image: ''
      }
    },
    formIsValid() {
      this.errors = [];

      return new Promise( (resolve, reject) => {

        setTimeout( () => {

          if(!this.form.title) {
            this.errors.push('Title missing');
          }

          if(!this.form.description) {
            this.errors.push('Description missing');
          }

          if(!this.form.img) {
            this.errors.push('Image missing');
          }

          if(!this.form.price) {
            this.errors.push('Price missing');
          }

          this.errors.length ? reject('ko') : resolve('ok');
        }, 500 )

      } );

    }
  },
}
</script>

<style>
</style>
