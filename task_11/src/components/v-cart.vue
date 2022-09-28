<template>
  <div class="v-cart">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'v-cart',
    components: {},
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