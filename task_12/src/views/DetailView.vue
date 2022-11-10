<template>
  <div class="detail">
    <v-header/>
    <v-country/>
  </div>
</template>

<script>
  import vHeader from '../components/v-header.vue';
  import vCountry from '../components/v-country.vue';


  export default {
    name: 'DetailView',
    components: {
      vHeader,
      vCountry
    }
  }
</script>

<style lang="scss">
  .detail {
    background-color: var(--light-bg);
  }
</style>
