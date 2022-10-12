<template>
  <div class="v-cart">
    <div class="v-cart__bag">
      <div class="v-cart__price-wrap">
        <div class="v-cart__price">
          <p class="v-cart__price-total">= ₴</p>
          <span class="v-cart__price-triangle"></span>
        </div>
      </div>
      <div class="v-cart__number">
        <span>2</span>
      </div>
    </div>
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
      return {}
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {}
  }
</script>

<style lang="scss">
  .v-cart {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;
    margin: 0;
    color: rgb(57, 61, 61);
    &__bag {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: $white;
      background-image: url('../assets/images/icons/cart.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 45px;
      box-shadow: 0px 0px 30px 0px rgba(205, 71, 41, 0.26);
      position: relative;
    }
    &__price {
      position: relative;
      background-color: rgb(57, 61, 61);
      width: 100px;
      height: 40px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      &-wrap {
        position: absolute;
        left: -125px;
        top: calc(50% - 20px);
      }
      &-total {
        margin: 0;
        font-weight: 600;
        font-size: 16px;
        color: $white;
      }
      &-triangle {
        display: block;
        height: 20px;
        width: 20px;
        background-color: inherit;
        border: inherit;
        position: absolute;
        top: calc(50% - 10px);
        right: -9px;
        clip-path: polygon(50% 0%, 50% 100%, 100% 50%);
        // transform: rotate(90deg);
        border-radius: 0 0 0 0.25em;
      }
    }
    &__number {
      position: absolute;
      bottom: -10px;
      right: -10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: $orange;
      color: $white;
      & span {
        font-weight: 600;
        font-size: 16px;
        color: $white;
      }
    }
  }
</style>