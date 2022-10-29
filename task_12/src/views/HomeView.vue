<template>
  <div class="home">
    <v-header/>
    <v-countries/>
  </div>
</template>

<script>
  import vHeader from "../components/v-header.vue"
  import vCountries from "../components/v-countries.vue"

  export default {
    name: 'HomeView',
    components: {
      vHeader,
      vCountries
    }
  }
</script>
