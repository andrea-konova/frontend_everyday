<template>
  <h1 class="v-section-main-title">{{title}}</h1>
</template>

<script>
  export default {
    name: 'v-section-main-title',
    components: {},
    props: [
      'title'
    ],
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
  .v-section-main-title {
    margin: 105px 0 18px;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    color: #000000;
  }
</style>