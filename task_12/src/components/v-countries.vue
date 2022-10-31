<template>
  <div class="v-countries">
    <div class="v-countries-wrap">
      <v-countries-item
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
  import vCountriesItem from './v-countries-item.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'v-countries',
    components: {
      vCountriesItem
    },
    data() {
      return {
        sortedProducts: [],
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
        products: [
          {
            image: 'p_1.png',
            name: 'Quattro formaggi',
            diameter: '32 cм',
            ingredients: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
            price: '119 UAH',
            article: 'p_1',
            dish: 'Pizza'
          },
          {
            image: 'p_2.png',
            name: 'Carbonara',
            diameter: '32 cм',
            ingredients: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
            price: '119 UAH',
            article: 'p_2',
            dish: 'Pizza'
          },
          {
            image: 'p_3.png',
            name: 'Philadelphia',
            diameter: '32 cм',
            ingredients: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
            price: '119 UAH',
            article: 'p_3',
            dish: 'Pizza'
          },
          {
            image: 'p_4.png',
            name: 'Di mare',
            diameter: '32 cм',
            ingredients: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
            price: '119 UAH',
            article: 'p_4',
            dish: 'Pizza'
          },
          {
            image: 'p_5.png',
            name: 'Paperoni',
            diameter: '32 cм',
            ingredients: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
            price: '119 UAH',
            article: 'p_5',
            dish: 'Pizza'
          },
          {
            image: 'p_6.png',
            name: 'Margarita',
            diameter: '32 cм',
            ingredients: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
            price: '119 UAH',
            article: 'p_6',
            dish: 'Pizza'
          },
          {
            image: 'p_7.png',
            name: 'Quattro formaggi',
            diameter: '32 cм',
            ingredients: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
            price: '119 UAH',
            article: 'p_7',
            dish: 'Pizza'
          },
          {
            image: 'p_8.png',
            name: 'Gawaiian',
            diameter: '32 cм',
            ingredients: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
            price: '119 UAH',
            article: 'p_8',
            dish: 'Pizza'
          },
          {
            image: 's_1.jpeg',
            name: 'Supper fila',
            diameter: '1155 g',
            ingredients: 'Surimi-tamago roll, Maki with butter, Maki with salmon, Philadelphia roll with salmon, Chizu roll',
            price: '559 UAH',
            article: 's_1',
            dish: 'Sushi'
          },
          {
            image: 's_2.jpeg',
            name: 'Zelenyj drakon',
            diameter: '395 g',
            ingredients: 'Dragon roll with fried salmon, eel, cream cheese, takuan, sweet shiitake, cucumber, avocado, sesame and unagi sauce',
            price: '249 UAH',
            article: 's_2',
            dish: 'Sushi'
          },
          {
            image: 's_3.jpeg',
            name: 'Philadelphia',
            diameter: '260 g',
            ingredients: 'Classic roll with salmon, cream cheese, avocado, tobiko caviar and cucumber',
            price: '259 UAH',
            article: 's_3',
            dish: 'Sushi'
          },
          {
            image: 's_4.jpeg',
            name: 'Tajskij losos',
            diameter: '330 g',
            ingredients: 'Original roll with caramelized salmon, eel, kimchi surimi, campio, cream cheese, sweet shiitake, cucumber, spicy and mango-chili sauces, green onion and french fries',
            price: '299 UAH',
            article: 's_4',
            dish: 'Sushi'
          },
          {
            image: 'sa_1.jpeg',
            name: 'Cezar',
            diameter: '275 g',
            ingredients: 'Chicken fillet, crispy bacon, tomatoes, lettuce mix, egg, parmesan cheese, green butter garlic croutons, caesar dressing',
            price: '169 UAH',
            article: 'sa_1',
            dish: 'Salad'
          },
          {
            image: 'sa_2.jpeg',
            name: 'Grecheskij',
            diameter: '245 g',
            ingredients: 'Tomatoes, bell peppers, cucumbers, romaine lettuce, feta cheese, red onion, oregano, olive oil, Balsamic sauce',
            price: '125 UAH',
            article: 'sa_2',
            dish: 'Salad'
          },
          {
            image: 'sa_3.jpeg',
            name: 'Salat-s-lososem',
            diameter: '190 g',
            ingredients: 'Lightly salted salmon, avocado, mango, salad mix, cherry tomatoes, almond flakes, orange sauce',
            price: '199 UAH',
            article: 'sa_3',
            dish: 'Salad'
          },
          {
            image: 'de_1.jpeg',
            name: 'Napoleon',
            diameter: '120 g',
            ingredients: 'Napoleon with vanilla custard',
            price: '99 UAH',
            article: 'de_1',
            dish: 'Dessert'
          },
          {
            image: 'de_2.jpeg',
            name: 'Chizkejk',
            diameter: '140 g',
            ingredients: 'Classic shortbread cream cheese dessert',
            price: '109 UAH',
            article: 'de_2',
            dish: 'Dessert'
          },
          {
            image: 'dr_1.jpeg',
            name: 'Corona Extra',
            diameter: '0.33 l',
            ingredients: 'Beer',
            price: '89 UAH',
            article: 'dr_1',
            dish: 'Drinks'
          },
          {
            image: 'dr_2.jpeg',
            name: 'Pepsi',
            diameter: '0.5 l',
            ingredients: 'Fizzy drink',
            price: '45 UAH',
            article: 'dr_2',
            dish: 'Drinks'
          }
        ]
      }
    },
    computed: {
      ...mapGetters([]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts;
        } else {
          return this.sortByCategoriesPizza();
        }
      }
    },
    methods: {
      // ...mapActions([
      //   'ADD_TO_CART'
      // ]),
      addToCart(data) {
        // this.ADD_TO_CART(data);
        this.$store.commit('SET_CART', data)
      },
      sortByCategories(name) {
        this.sortedProducts = [];
        this.products.map(item => {
          if (item.dish === name) {
            this.sortedProducts.push(item)
          }
        })
      },
      sortByCategoriesPizza() {
        this.products.map(item => {
          if (item.dish === "Pizza") {
            this.sortedProducts.push(item)
          }
        })
        return this.sortedProducts;
      }
    }
  }
</script>

<style lang="scss">
  .v-countries {
    &-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 75px;
      margin: 0 auto;
      padding: 45px 0;
    }
  }
  @media screen and ( max-width: 992px ) {
    .v-countries {
      &-wrap {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 40px;
        margin: 0 auto;
        color: black;
      }
      &-navigation {
        margin: 0 auto 50px;
        max-width: 830px;
      }
      &-button {
        width: 40px;
        height: 40px;
        &::after {
          content: '';
          top: calc(50% - 10px);
          left: calc(50% - 10px);
          width: 20px;
          height: 20px;
        }
        &-row {
          margin: 50px 0 70px;
        }
      }
    }
  }
  @media screen and ( max-width: 760px ) {
    .v-countries {
      &-wrap {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 40px;
      }
      &-navigation {
        margin: 0 auto 30px;
        width: 100%;
        max-width: 830px;
      }
    }
  }
  @media screen and ( max-width: 576px ) {
    .v-countries {
      &-wrap {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 40px;
        width: 90%;
      }
      &-navigation {
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 auto 30px;
        width: 100%;
        max-width: 830px;
      }
    }
  }
</style>