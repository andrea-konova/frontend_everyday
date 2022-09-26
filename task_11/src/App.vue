<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view/> -->
    <v-main-wrapper/>
    <v-cart/>
    <v-catalog/>
    <v-footer/>
  </div>
</template>

<script>
  import vMainWrapper from './components/v-main-wrapper.vue';
  import vCatalog from './components/v-catalog.vue';
  import vCart from './components/v-cart.vue';
  import vFooter from './components/v-footer.vue';

  export default {
    name: 'app',
    components: {
      vMainWrapper,
      vCart,
      vCatalog,
      vFooter
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
      color: #42b983;
    }
  }
}
</style>
