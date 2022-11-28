<template>
  <div class="v-countries">
    <div class="v-countries__navigation-row">
      <v-search-field/>
      <v-select
        :options="options"
        @select="sortByOption"
        :selected="selected"
      />
    </div>
    <div class="v-countries-wrap">
      <v-countries-item
        v-for="country in filteredCountries"
        :key="country.article"
        :country_data="country"
      />
    </div>
  </div>
</template>

<script>
  import vCountriesItem from './v-countries-item.vue';
  import vSelect from "../components/v-select.vue";
  import vSearchField from "../components/v-search-field.vue";
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'v-countries',
    components: {
      vSelect,
      vSearchField,
      vCountriesItem
    },
    data() {
      return {
        options: [
          {name: 'Africa', value: 'Africa'},
          {name: 'America', value: 'Americas'},
          {name: 'Asia', value: 'Asia'},
          {name: 'Europe', value: 'Europe'},
          {name: 'Oceania', value: 'Oceania'}
        ],
        selected: 'Filter by Region',
        sortedCountries: []
      }
    },
    computed: {
      ...mapGetters([
        'COUNTRIES',
        'SEARCH_VALUE'
      ]),
      filteredCountries() {
        if (this.sortedCountries.length) {
          return this.sortedCountries;
        } else {
          return this.COUNTRIES;
        }
      }
    },
    methods: {
      ...mapActions([
        'GET_COUNTRIES_FROM_API'
      ]),
      sortByOption(option) {
        this.selected = option.name;
        this.sortedCountries = [];
        this.COUNTRIES.map(item => {
          if (item.region === option.value) {
            this.sortedCountries.push(item);
          }
        })
      },
      sortBySearchValue(value) {
        this.sortedCountries = [];
        if (value) {
          this.sortedCountries =  this.COUNTRIES.filter(item => {
            return item.name.common.toLowerCase().includes(value.toLowerCase());
          })
          if (this.sortedCountries.length === 0) {
            alert('No such country found! Try changing your request!')
          }
        }
      }
    },
    watch: {
      SEARCH_VALUE() {
        this.sortBySearchValue(this.SEARCH_VALUE);
      }
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
    &__navigation-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 95%;
      max-width: 1280px;
      margin: 48px auto;
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
      &__navigation-row {
        flex-direction: column;
        align-items: flex-start;
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