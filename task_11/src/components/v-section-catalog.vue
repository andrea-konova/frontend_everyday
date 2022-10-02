<template>
  <div class="v-section-catalog">
    <v-section-title title="Popular dishes"/>
    <v-catalog/>
  </div>
</template>

<script>
  import vSectionTitle from './v-section-title.vue';
  import vCatalog from './v-catalog.vue';

  export default {
    name: 'v-section-catalog',
    components: {
      vSectionTitle,
      vCatalog
    },
    props: {},
    data() {
      return {}
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {}
  }
</script>

<style lang="scss">
  .v-section-catalog {
    margin: 140px 0 0;
    background-image: url('../assets/images/section-catalog-bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
</style>