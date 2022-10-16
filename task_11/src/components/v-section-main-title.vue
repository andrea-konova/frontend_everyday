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
  @media screen and ( max-width: 992px ) {
    .v-section-main-title {
      margin: 105px 0 10px;
      font-size: 40px;
      line-height: 44px;
    }
  }
  @media screen and ( max-width: 760px ) {
    .v-section-main-title {
      font-size: 32px;
      line-height: 35px;
    }
  }
  @media screen and ( max-width: 576px ) {
    .v-section-main-title {
      margin: 75px 0 10px;
      font-size: 32px;
      line-height: 35px;
    }
  }
</style>