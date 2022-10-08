<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view/> -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
    <v-section-main/>
    <v-section-catalog/>
    <v-section-social/>
    <v-section-contacts/>
    <v-footer/>
  </div>
</template>

<script>
  import vSectionMain from './components/v-section-main.vue';
  import vSectionCatalog from './components/v-section-catalog.vue';
  import vSectionSocial from './components/v-section-social.vue';
  import vSectionContacts from './components/v-section-contacts.vue'
  import vFooter from './components/v-footer.vue';

  export default {
    name: 'app',
    components: {
      vSectionMain,
      vSectionCatalog,
      vSectionSocial,
      vSectionContacts,
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
      color: #42b983;
    }
  }
}
</style>
