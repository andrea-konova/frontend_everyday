<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view/> -->
    <v-section-main/>
    <v-section-catalog/>
    <v-footer/>
  </div>
</template>

<script>
  import vSectionMain from './components/v-section-main.vue';
  import vSectionCatalog from './components/v-section-catalog.vue';
  import vFooter from './components/v-footer.vue';

  export default {
    name: 'app',
    components: {
      vSectionMain,
      vSectionCatalog,
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
