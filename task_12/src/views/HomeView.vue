<template>
  <div class="home">
    <v-header/>
    <v-select
      :options="options"
      @select="optionsSelect"
      :selected="selected"
    />
    <p>{{selected}}</p>
    <v-countries/>
  </div>
</template>

<script>
  import vHeader from "../components/v-header.vue";
  import vSelect from "../components/v-select.vue"
  import vCountries from "../components/v-countries.vue";

  export default {
    name: 'HomeView',
    components: {
      vHeader,
      vSelect,
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
  }
</style>
