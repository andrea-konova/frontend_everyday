<template>
  <div class="v-catalog-navigation">
    <v-catalog-navigation-item
      v-for="category in categories"
      :key="category.id"
      :category="category"
      @sortByCategories="sortByCategories"
    />
  </div>
</template>

<script>
  import vCatalogNavigationItem from './v-catalog-navigation-item.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'v-catalog-navigation',
    components: {
      vCatalogNavigationItem
    },
    props: {},
    data() {
      return {
        categories: [
          {
            id: 'button-1',
            name: 'Pizza',
            checked: true
          },
          {
            id: 'button-2',
            name: 'Sushi',
            checked: false
          },
          {
            id: 'button-3',
            name: 'Salad',
            checked: false
          },
          {
            id: 'button-4',
            name: 'Dessert',
            checked: false
          },
          {
            id: 'button-5',
            name: 'Drinks',
            checked: false
          }
        ],
        // sortedProducts: []
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
      // filteredProducts() {
      //   if (this.sortedProducts.length) {
      //     return this.sortedProducts;
      //   } else {
      //     return this.PRODUCTS;
      //   }
      // }
    },
    methods: {
      sortByCategories() {
        this.$emit('sortByCategories', this.name);
      },
      // sortByCategories(name) {
      //   this.PRODUCTS.map(item => {
      //     if (item.dish === name) {
      //       this.sortedProducts.push(item)
      //     }
      //   })
      // },
      filteredProducts() {
        this.$emit('filteredProducts', this.sortedProducts);
        // if (this.sortedProducts.length) {
        //   return this.sortedProducts;
        // } else {
        //   return this.PRODUCTS;
        // }
      }
    },
    watch: {},
    mounted() {}
  }
</script>

<style lang="scss">
  .v-catalog-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 50px;
    width: 80%;
    max-width: 830px;
  }
  .v-radio-button {
  display: none;
  }
  .v-label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 135px;
    height: 55px;
    border: none;
    border-radius: 27px;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    background: $gradient1;
    color: #151515;
    transition: all 0.3s;
  }
  .v-label:hover {
    cursor: pointer;
    background: $blue;
    opacity: 1;
    color: $white;
  }
  input:checked+label.v-label {
    background: $blue;
    opacity: 1;
    color: $white;
  }
</style>