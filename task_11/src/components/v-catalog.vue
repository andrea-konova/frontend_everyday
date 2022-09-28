<template>
  <div class="v-catalog">
    <!-- <h2>Заголовок</h2> -->
    <v-catalog-item
      v-for="product in products"
      :key="product.article"
      :product_data="product"
      @sendName="showName"
    />
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
        products: [
        {
          image: "p_1.png",
          name: "Quattro formaggi",
          diameter: "32 cм",
          ingredients: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
          price: "119 UAH",
          article: "p_1",
          dish: "pizza"
        },
        {
          image: "p_2.png",
          name: "Carbonara",
          diameter: "32 cм",
          ingredients: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
          price: "119 UAH",
          article: "p_2",
          dish: "pizza"
        },
        {
          image: "p_3.png",
          name: "Philadelphia",
          diameter: "32 cм",
          ingredients: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
          price: "119 UAH",
          article: "p_3",
          dish: "pizza"
        },
        {
          image: "p_4.png",
          name: "Di mare",
          diameter: "32 cм",
          ingredients: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
          price: "119 UAH",
          article: "p_4",
          dish: "pizza"
        },
        {
          image: "p_5.png",
          name: "Paperoni",
          diameter: "32 cм",
          ingredients: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
          price: "119 UAH",
          article: "p_5",
          dish: "pizza"
        },
        {
          image: "p_6.png",
          name: "Margarita",
          diameter: "32 cм",
          ingredients: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
          price: "119 UAH",
          article: "p_6",
          dish: "pizza"
        },
        {
          image: "p_7.png",
          name: "Quattro formaggi",
          diameter: "32 cм",
          ingredients: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
          price: "119 UAH",
          article: "p_7",
          dish: "pizza"
        },
        {
          image: "p_8.png",
          name: "Gawaiian",
          diameter: "32 cм",
          ingredients: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
          price: "119 UAH",
          article: "p_8",
          dish: "pizza"
        }
      ]
      }
    },
    computed: {},
    methods: {
      showName(data) {
        alert(data);
      }
    },
    watch: {},
    mounted() {
      console.log('Hello, v-catalog is alive!');
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