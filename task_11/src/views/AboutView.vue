<template>
  <div class="about">
    <v-header/>
    <h1>This is an about page</h1>
    <h2>Some information will be here later.</h2>
  </div>
</template>

<script>
  import vHeader from '../components/v-header.vue';


  export default {
    name: 'AboutView',
    components: {
      vHeader
    }
  }
</script>
