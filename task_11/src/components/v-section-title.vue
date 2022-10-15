<template>
  <h2 class="v-section-title">{{title}}</h2>
</template>

<script>
  export default {
    name: 'v-section-title',
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
  .v-section-title {
    margin: 0 0 45px;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    color: #000000;
  }
  @media screen and ( max-width: 992px ) {
    .v-section-title {
      font-size: 40px;
      line-height: 44px;
    }
  }
  @media screen and ( max-width: 760px ) {
    .v-section-title {
      margin: 0 0 25px;
      font-size: 28px;
      line-height: 30px;
    }
  }
</style>