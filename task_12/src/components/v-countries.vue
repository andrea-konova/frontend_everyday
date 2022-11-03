<template>
  <div class="v-countries">
    <div class="v-countries-wrap">
      <v-countries-item
        v-for="country in COUNTRIES"
        :key="country.article"
        :country_data="country"
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
        
      }
    },
    computed: {
      ...mapGetters([
        'COUNTRIES'
      ]),
    },
    methods: {
      ...mapActions([
        'GET_COUNTRIES_FROM_API'
      ])
    },
    mounted() {
      this.GET_COUNTRIES_FROM_API();
    }
  }
</script>

<style lang="scss">
  .v-countries {
    width: 95%;
    max-width: 1280px;
    margin: 0 auto;
    &-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 75px;
      margin: 0 auto;
      padding: 0 0 45px;
    }
  }
  @media screen and ( max-width: 992px ) {
    .v-countries {
      &-wrap {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 50px;
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
        gap: 75px;
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