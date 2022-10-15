<template>
  <div class="v-section-contacts">
    <v-section-title
      title="Fill out the form and we will call you"
      class="v-section-contacts__title"
    />
    <v-contact-form/>
    <div class="v-section-contacts__image-wrap">
      <img src="../assets/images/car-1.png" alt="delivery" class="v-section-contacts__image">
    </div>
  </div>
</template>

<script>
  import vSectionTitle from './v-section-title.vue';
  import vContactForm from './v-contact-form.vue';

  export default {
    name: 'v-section-contacts',
    components: {
      vSectionTitle,
      vContactForm
    },
    props: {},
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
  .v-section-contacts {
    padding: 52px 0 0;
    background-color: $main-bg;
    background-image: url('../assets/images/contacts-bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    &__title {
      margin: 0 auto 45px;
      width: 80%;
      max-width: 500px;
    }
    &__image {
      width: 100%;
      height: 100%;
      &-wrap {
        // position: absolute;
        // bottom: -10px;
        // left: calc(50% - 275px);
        margin: 0 auto;
        width: 547px;
        height: 217px;
        object-position: center;
        object-fit: contain;
      }
    }
  }
  @media screen and ( max-width: 992px ) {
    .v-section-contacts {
      &__image {
        &-wrap {
          width: 450px;
          height: 200px;
        }
      }
    }
  }
  @media screen and ( max-width: 760px ) {
    .v-section-contacts {
      &__image {
        &-wrap {
          width: 350px;
          height: 170px;
        }
      }
    }
  }
  @media screen and ( max-width: 576px ) {
    .v-section-contacts {
      &__image {
        &-wrap {
          width: 280px;
          height: 140px;
        }
      }
    }
  }
</style>