<template>
  <div>
    <h4>{{ product.title }}</h4>
    <img :src="product.featured_image" />
    <button class="c-trigger" @click="addItem({quantity:1, id: product.variants[0].id})">Add To Cart</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props:["product"],
  methods: {
    ...mapActions("miniCart", ["addItem"])
  }
}
</script>

<style scoped>
  h4{
    text-align: center;
  }
  img{
    width: 220px;
  }
  .c-trigger{
    width:100%;
  }
</style>