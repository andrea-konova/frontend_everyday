<template>
  <div class="v-cart">
    <h2>{{title}}</h2>
    <v-cart-item/>
  </div>
</template>

<script>
  import vCartItem from './v-cart-item.vue';

  export default {
    name: 'v-cart',
    components: {
      vCartItem
    },
    props: {},
    data() {
      return {
        title: 'Это корзина'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello, v-cart is alive!');
    }
  }
</script>

<style lang="scss">
  .v-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0;
    color: rgb(57, 61, 61);
    background-color: black;
  }
</style>