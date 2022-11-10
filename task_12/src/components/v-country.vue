<template>
  <div class="v-country">
    <router-link to="/">
      <button
        v-if="!THEME"
        class="v-country__button v-country__button--dark">
        Back
      </button>
      <button v-else class="v-country__button">Back</button>
    </router-link>
    <div class="v-country__info">
      <div class="v-country__image-wrap">
        <img v-if="COUNTRY.flags" :src="COUNTRY.flags.png" alt="img" class="v-country__image">
      </div>
      <div class="v-country__content-wrap">
        <h2 v-if="COUNTRY.name.common" class="v-country__title">{{COUNTRY.name.common}}</h2>
        <h2 v-else class="v-country__title">{{COUNTRY.name.official}}</h2>
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
          <v-country-button
            v-for="border in COUNTRY.borders"
            :key="border.article"
            :borders_data="border"
          />
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
        'COUNTRY',
        'THEME'
      ])
    },
    methods: {
      // нужно будет разобраться с выводом валюты
      showCurrencies(COUNTRY) {
        let currencies = COUNTRY.currencies;
        let currenciesName = (Object.keys(currencies));
        // console.log(COUNTRY.currencies);
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
    color: var(--dark-text);
    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 80px;
      padding: 10px 32px;
      border: none;
      border-radius: 6px;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      background: var(--white-bg);
      color: var(--dark-text);
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
      padding-bottom: 200px;
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
      color: var(--dark-text);
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
          align-items: center;
          flex-wrap: wrap;
          margin: 70px 0 0;
          text-align: left;
          width: 100%;
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
        margin: 0 15px 10px 0;
      }
    }
  }
  .v-country__button--dark::before {
    background-image: url('../assets/images/icons/arrow-left-dark.png');
  }
  @media screen and ( max-width: 992px ) {
    .v-country {
      &__info {
        flex-direction: column;
        padding-bottom: 90px;
      }
      &__image {
        &-wrap {
          margin-bottom: 44px;
          width: 560px;
        }
      }
      &__content-wrap {
        width: 560px;
      }
    }
  }
  @media screen and ( max-width: 760px ) {
    .v-country {
      &__info {
        margin-top: 60px;
        padding-bottom: 60px;
      }
      &__button {
        margin-top: 40px;
        padding: 6px 24px;
        font-size: 14px;
        &::before {
          width: 18px;
          height: 18px;
        }
      }
      &__image {
        &-wrap {
          width: 500px;
          height: 320px;
        }
      }
      &__content-wrap {
        width: 95%;
      }
      &__title {
        margin: 0 0 16px;
        font-size: 22px;
        line-height: 30px;
      }
      &__text {
        font-size: 14px;
        line-height: 32px;
      }
      &-button {
        font-size: 12px;
      }
      &__content-row--border {
        margin: 35px 0 0;
      }
    }
  }
  @media screen and ( max-width: 576px ) {
    .v-country {
      &__image {
        &-wrap {
          width: 95%;
          max-width: 320px;
          height: 230px;
        }
      }
      &__content-wrap {
        width: 95%;
      }
      &__content-row {
        flex-direction: column;
      }
      &__content-column {
        &:first-child {
          margin-bottom: 32px;
        }
      }
    }
  }
</style>