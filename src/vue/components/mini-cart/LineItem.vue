<template>
  <div class="c-row">
    <img :src="shoppingCart.featured_image.url" alt="">
    <div class="c-item-title"> {{ shoppingCart.title }}</div>
    <div class="c-item-quantity">qty:{{ shoppingCart.quantity }}</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions("miniCart", ["setCart"])
  },
  computed: mapState("miniCart", ["shoppingCart"])
};
</script>

<style scoped>
  .c-row{
    display: grid;
    grid-auto-flow: column;
    grid-gap: 22px;
    justify-content: left;
    align-items: center;
    border-bottom: 1px solid;

  }
  img{
    width: 80px;
  }

</style>