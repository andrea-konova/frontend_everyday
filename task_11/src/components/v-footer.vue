<template>
  <div class="v-footer">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'v-footer',
    components: {},
    props: {},
    data() {
      return {
        title: 'Здесь будет footer'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello, v-footer is alive!');
    }
  }
</script>

<style>
  .v-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    color: brown;
  }
</style>