<template>
  <div class="home">
    <v-section-main/>
    <v-section-catalog/>
    <v-section-social/>
    <v-section-contacts/>
  </div>
</template>

<script>
  import vSectionMain from '../components/v-section-main.vue';
  import vSectionCatalog from '../components/v-section-catalog.vue';
  import vSectionSocial from '../components/v-section-social.vue';
  import vSectionContacts from '../components/v-section-contacts.vue'

  export default {
    name: 'HomeView',
    components: {
      vSectionMain,
      vSectionCatalog,
      vSectionSocial,
      vSectionContacts
    }
  }
</script>
