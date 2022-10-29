<template>
  <div class="v-countries-item">
    <div class="v-countries-item__image-wrap">
      <!-- <img v-bind:src=" require(`../assets/images/products/${product_data.image}`) " alt="img" class="v-countries-item__image"> -->
    </div>
    <div class="v-countries-item__content-wrap">
      <h3 class="v-countries-item__name">{{product_data.name}}</h3>
      <p class="v-countries-item__population">Population: {{product_data.ingredients}}</p>
      <p class="v-countries-item__region">Region: {{product_data.price}}</p>
      <p class="v-countries-item__capital">Capital: {{product_data.price}}</p>
    </div>
    <span class="v-countries-item__triangle"></span>
  </div>
</template>

<script>
  export default {
    name: 'v-countries-item',
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data);
      }
    }
  }
</script>

<style lang="scss">
  .v-countries-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: #FFFFFF;
    border: 2px solid #ECEEF7;
    border-radius: 16px;
    position: relative;
    &__content-wrap {
      margin-top: 30px;
      width: 100%;
    }
    &__triangle {
      display: block;
      height: 45px;
      width: 45px;
      background-color: inherit;
      border: inherit;
      position: absolute;
      bottom: -25px;
      left: calc(50% - 20px);
      clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
      transform: rotate(-45deg);
      border-radius: 0 0 0 25px;
      }
    &__image {
      width: 100%;
      height: 100%;
      &-wrap {
        width: 160px;
        height: 160px;
        object-position: center;
        object-fit: contain;
        filter: drop-shadow(20px 10px 20px rgba(143, 92, 32, 0.1)) drop-shadow(10px 5px 10px rgba(143, 92, 32, 0.1));
      }
    }
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__title {
      margin: 0;
      font-weight: 600;
      font-size: 16px;
    }
    &__diameter {
      margin: 0;
      font-weight: 400;
      font-size: 12px;
    }
    &__caption {
      margin: 8px 0 19px;
      min-height: 34px;
      font-weight: 400;
      font-size: 12px;
      text-align: left;
    }
  }
</style>