<template>
  <div class="v-country">
    <router-link to="/">
      <button class="v-country__button">Back</button>
    </router-link>
    <div class="v-country__info">
      <div class="v-country__image-wrap">
        <img v-if="COUNTRY.flags" :src="COUNTRY.flags.png" alt="img" class="v-country__image">
      </div>
      <div class="v-country__content-wrap">
        <h2 class="v-country__title">{{COUNTRY.name.common}}</h2>
        <div class="v-country__content-row">
          <div class="v-country__content-column">
            <p class="v-country__text">Native Name: 
              <span class="v-country__text--light">{{COUNTRY.name.official}}</span>
            </p>
            <p class="v-country__text">Population: 
              <span class="v-country__text--light">{{COUNTRY.population}}</span>
            </p>
            <p class="v-country__text">Region: 
              <span class="v-country__text--light">{{COUNTRY.region}}</span>
            </p>
            <p class="v-country__text">Sub Region: 
              <span class="v-country__text--light">{{COUNTRY.subregion}}</span>
            </p>
            <p class="v-country__text">Capital: 
              <span class="v-country__text--light">{{COUNTRY.capital[0]}}</span>
            </p>
          </div>
          <div class="v-country__content-column">
            <p class="v-country__text">Top Level Domain: 
              <span class="v-country__text--light">{{COUNTRY.tld[0]}}</span>
            </p>
            <p class="v-country__text">Currencies: 
              <span class="v-country__text--light">{{showCurrencies(COUNTRY)}}</span>
            </p>
            <p class="v-country__text">Languages: 
              <span class="v-country__text--light">{{showLanguages(COUNTRY)}}</span>
            </p>
          </div>
        </div>
        <div class="v-country__content-row--border">
          <p class="v-country__text v-country__text--border">Border Countries:</p>
          <v-country-button/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vCountryButton from "../components/v-country-button.vue";
  import { mapGetters } from 'vuex';

  export default {
    name: 'v-country',
    components: {
      vCountryButton
    },
    computed: {
      ...mapGetters([
        'COUNTRY'
      ])
    },
    methods: {
      // нужно будет разобраться с выводом валюты
      showCurrencies(COUNTRY) {
        let currencies = COUNTRY.currencies;
        let currenciesName = (Object.keys(currencies));
        return currenciesName[0];
      },
      showLanguages(COUNTRY) {
        let languages = COUNTRY.languages;
        let lang = [];
        for (let prop in languages) {
          lang.push(languages[prop]);
        }
        return lang.join(', ');
      }
    }
  }
</script>

<style lang="scss">
  .v-country {
    width: 95%;
    max-width: 1280px;
    margin: 0 auto;
    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 32px;
      border: none;
      background-color: transparent;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      color: $dark-text;
      cursor: pointer;
      &::before {
        content: '';
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background-image: url('../assets/images/icons/arrow-left.png');
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 90px;
    }
    &__image {
      width: 100%;
      height: 100%;
      &-wrap {
        width: 45%;
        max-width: 560px;
        height: 400px;
        object-position: center;
        object-fit: contain;
        border-radius: 10px;
        overflow: hidden;
      }
    }
    &__content-wrap {
      width: 45%;
      max-width: 600px;
      color: $dark-text;
    }
    &__title {
      margin: 0 0 23px;
      font-weight: 800;
      font-size: 32px;
      line-height: 44px;
      text-align: left;
    }
    &__content {
      &-row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        &--border {
          display: flex;
          margin: 70px 0 0;
          text-align: left;
        }
      }
      &-column {
        text-align: left;
      }
    }
    &__text {
      margin: 0 0;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      &--light {
        font-weight: 300;
      }
      &--border {
        margin-right: 15px;
      }
    }
  }
</style>