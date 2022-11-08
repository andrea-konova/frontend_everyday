<template>
  <router-link to="/detail" class="v-menu__item-link">
    <div 
      class="v-countries-item"
      @click="getCountryFromApi">
      <div class="v-countries-item__image-wrap">
        <img :src="country_data.flags.png" alt="img" class="v-countries-item__image">
      </div>
      <div class="v-countries-item__content-wrap">
        <h3 class="v-countries-item__title">{{country_data.name.official}}</h3>
        <p class="v-countries-item__text">Population: 
          <span class="v-countries-item__text--light">{{country_data.population}}</span>
        </p>
        <p class="v-countries-item__text">Region: 
          <span class="v-countries-item__text--light">{{country_data.region}}</span>
        </p>
        <p class="v-countries-item__text">Capital: 
          <span v-if="country_data.capital" class="v-countries-item__text--light">{{country_data.capital[0]}}</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'v-countries-item',
    props: {
      country_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      getCountryFromApi() {
        this.$emit('getCountryFromApi', this.country_data.name.common);
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