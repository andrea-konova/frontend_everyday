<template>
  <div class="home">
    <v-header/>
    <div class="home__navigation-row">
      <v-search-field/>
      <v-select
        :options="options"
        @select="optionsSelect"
        :selected="selected"
      />
    </div>
    <v-countries/>
  </div>
</template>

<script>
  import vHeader from "../components/v-header.vue";
  import vSelect from "../components/v-select.vue";
  import vSearchField from "../components/v-search-field.vue";
  import vCountries from "../components/v-countries.vue";

  export default {
    name: 'HomeView',
    components: {
      vHeader,
      vSelect,
      vSearchField,
      vCountries
    },
    data() {
      return {
        options: [
          {name: 'Africa', value: 1},
          {name: 'America', value: 2},
          {name: 'Asia', value: 3},
          {name: 'Europe', value: 4},
          {name: 'Oceania', value: 5}
        ],
        selected: 'Filter by Region'
      }
    },
    methods: {
        optionsSelect(option) {
          this.selected = option.name;
        }
    }
  }
</script>

<style lang="scss">
  .home {
    background-color: $light-bg;
    &__navigation-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 95%;
      max-width: 1280px;
      margin: 48px auto;
    }
  }
  @media screen and ( max-width: 760px ) {
    .home {
      &__navigation-row {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
</style>
