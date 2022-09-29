<template>
  <div class="v-catalog">
    <!-- <h2>Заголовок</h2> -->
    <v-catalog-item
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @sendName="showName"
    />
  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'v-catalog',
    components: {
      vCatalogItem
    },
    props: {},
    data() {
      return {
        
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API'
      ]),
      showName(data) {
        alert(data);
      }
    },
    watch: {},
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Данные для карточки товара получены');
        }
      })
    }
  }
</script>

<style lang="scss">
  .v-catalog {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 40px;
    margin: 0;
    color: black;
    background-color: antiquewhite;
  }
</style>