<template>
  <div class="v-countries-item">
    <div class="v-countries-item__image-wrap">
      <!-- <img v-bind:src=" require(`../assets/images/products/${product_data.image}`) " alt="img" class="v-countries-item__image"> -->
      <img src="../assets/images/Germany.png" alt="Germany" class="v-countries-item__image">
    </div>
    <div class="v-countries-item__content-wrap">
      <h3 class="v-countries-item__title">{{product_data.name}}</h3>
      <p class="v-countries-item__text">Population: 
        <span class="v-countries-item__text--light">{{product_data.price}}</span>
      </p>
      <p class="v-countries-item__text">Region: 
        <span class="v-countries-item__text--light">{{product_data.price}}</span>
      </p>
      <p class="v-countries-item__text">Capital: 
        <span class="v-countries-item__text--light">{{product_data.price}}</span>
      </p>
    </div>
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
    margin: 0;
    width: 100%;
    max-width: 264px;
    background-color: $white-bg;
    border-radius: 5px;
    overflow: hidden;
    &__content-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 24px 24px 46px;
      color: $dark-text;
      text-align: left;
    }
    &__image {
      width: 100%;
      height: 100%;
      &-wrap {
        width: 100%;
        height: 160px;
        object-position: center;
        object-fit: contain;
      }
    }
    &__title {
      margin: 0 0 16px;
      font-weight: 800;
      font-size: 18px;
      line-height: 26px;
    }
    &__text {
      margin: 0 0 8px;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      &:last-child {
        margin: 0;
      }
      &--light {
        font-weight: 300;
      }
    }
  }
  @media screen and ( max-width: 992px ) {
    .v-countries-item {
      max-width: none;
    }
  }
  @media screen and ( max-width: 576px ) {
    .v-countries-item {
      width: 264px;
      margin: 0 auto;
    }
  }
</style>