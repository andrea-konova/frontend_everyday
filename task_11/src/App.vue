<template>
  <div id="app">
    <router-view/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
    <v-footer/>
  </div>
</template>

<script>
  import vFooter from './components/v-footer.vue';

  export default {
    name: 'app',
    components: {
      vFooter
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #FE5626;
    }
  }
}
</style>
