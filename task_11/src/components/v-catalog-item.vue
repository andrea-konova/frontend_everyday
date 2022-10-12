<template>
  <div class="v-catalog-item">
    <div class="v-catalog-item__image-wrap">
      <img v-bind:src=" require(`../assets/images/products/${product_data.image}`) " alt="img" class="v-catalog-item__image">
    </div>
    <div class="v-catalog-item__content-wrap">
      <div class="v-catalog-item__info">
        <h3 class="v-catalog-item__title">{{product_data.name}}</h3>
        <p class="v-catalog-item__diameter">{{product_data.diameter}}</p>
      </div>
      <p class="v-catalog-item__caption">{{product_data.ingredients}}</p>
      <p class="v-catalog-item__price">{{product_data.price}}</p>
      <button
        class="v-catalog-item__button button"
        @click="sendDataToParent">
      </button>
    </div>
    <span class="v-catalog-item__triangle"></span>
  </div>
</template>

<script>
  export default {
    name: 'v-catalog-item',
    components: {},
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        title: 'Карточка товара'
      }
    },
    computed: {},
    methods: {
      sendDataToParent() {
        this.$emit('sendName', this.product_data.name)
      }
    },
    watch: {},
    mounted() {}
  }
</script>

<style lang="scss">
  .v-catalog-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 36px 15px 8px 25px;
    background-color: #FFFFFF;
    border: 2px solid #ECEEF7;
    border-radius: 16px;
    position: relative;
    &__content-wrap {
      margin-top: 30px;
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
        max-width: 170px;
        height: 170px;
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
      font-weight: 400;
      font-size: 12px;
      text-align: left;
    }
    &__button {
      position: absolute;
      bottom: -16px;
      left: calc(50% - 12px);
      width: 33px;
      height: 33px;
      border-radius: 50%;
      background: transparent;
      border: 2px solid #ECEEF6;
      background-image: url('../assets/images/icons/button.png');
      background-repeat: no-repeat;
      background-position: 51% 40%;
      z-index: 2;
      transition: all 0.3s;
      &:hover {
        cursor: pointer;
        background: $orange;
        border: 2px solid $orange;
        background-image: url('../assets/images/icons/button-hover.png');
        background-repeat: no-repeat;
        background-position: 50% 40%;
        box-shadow: 0px 4px 8px rgba(205, 71, 41, 0.26);
      }
    }
  }
</style>