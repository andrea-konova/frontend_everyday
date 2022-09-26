<template>
  <div class="v-catalog">
    <h2>{{title}}</h2>
    <v-catalog-item/>
  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item.vue';

  export default {
    name: 'v-catalog',
    components: {
      vCatalogItem
    },
    props: {},
    data() {
      return {
        title: 'Здесь будет каталог товара'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello, v-catalog is alive!');
    }
  }
</script>

<style>
  .v-catalog {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0;
    color: aqua;
    background-color: antiquewhite;
  }
</style>