<template>
  <div class="v-catalog-item">
    <h3>{{title}}</h3>
    <p>Price 2%</p>
    <button>Заказать</button>
  </div>
</template>

<script>
  export default {
    name: 'v-catalog-item',
    components: {},
    props: {},
    data() {
      return {
        title: 'Карточка товара'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello, v-catalog-item is alive!');
    }
  }
</script>

<style>
  .v-catalog-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    color: darkkhaki;
  }
</style>