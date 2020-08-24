<template>
  <div class="c-container">
    <h2>Collection: {{ collection.handle }}</h2>
    <div class="c-quickbuy">
      <Card 
        class="c-card"
        v-for="(product) in products.slice(0, 4)"
        :product="product"
        :key="product.id"
      />
    </div>
  </div>

</template>

<script>
import { mapActions } from "vuex";
import Card from "./Card.vue"

export default {
  props:["_products", "_collection"],
  components: {
    Card
  },
  data() {
    return {
      products: JSON.parse(this._products),
      collection: JSON.parse(this._collection)
    }
  },
  computed: {

  }
};
</script>

<style scoped>
 .c-quickbuy{
   display: flex;
   justify-content: space-evenly;
 }
 .c-container{
   margin:26px 0 10px 0;
   border-bottom: 1px solid #777;
 }
 .c-card{
    width: 220px;
    margin-bottom: 14px;
  }
  h2{
    text-align: center;
  }
</style>