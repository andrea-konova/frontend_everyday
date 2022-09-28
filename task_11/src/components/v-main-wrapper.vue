<template>
  <div class="v-main-wrapper">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'v-main-wrapper',
    components: {},
    props: {},
    data() {
      return {
        title: 'Food delivery in Kovel'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello, I am alive!');
    }
  }
</script>

<style lang="scss">
  .v-main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>