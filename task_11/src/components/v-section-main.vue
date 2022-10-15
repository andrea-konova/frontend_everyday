<template>
  <div class="v-section-main">
    <v-header/>
    <v-section-main-title title="Food delivery in Kovel"/>
    <p class="v-section-main__text">
      If you decide to relax or have unexpected guests, call us. We make sure that your vacation is comfortable, enjoyable and delicious
    </p>
    <div class="v-section-main__image-wrap">
      <img src="../assets/images/pizza.png" alt="pizza" class="v-section-main__image">
    </div>
  </div>
</template>

<script>
  import vHeader from './v-header.vue';
  import vSectionMainTitle from './v-section-main-title.vue';

  export default {
    name: 'v-section-main',
    components: {
      vHeader,
      vSectionMainTitle,
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
  .v-section-main {
    padding: 0 0 508px;
    background-color: $main-bg;
    background-image: url('../assets/images/main-bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    &__text {
      margin: 18px auto 26px;
      width: 570px;
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      text-align: center;
      color: #000000;
    }
    &__image {
      width: 100%;
      height: 100%;
      &-wrap {
        position: absolute;
        bottom: -80px;
        left: calc(50% - 300px);
        margin: 0 auto;
        width: 600px;
        height: 590px;
        object-position: center;
        object-fit: contain;
      }
    }
  }
  @media screen and ( max-width: 992px ) {
    .v-section-main {
      padding: 0 0 420px;
      &__text {
        font-size: 16px;
      }
      &__image {
        &-wrap {
          left: calc(50% - 250px);
          width: 500px;
          height: 490px;
        }
      }
    }
  }
  @media screen and ( max-width: 768px ) {
    .v-section-main {
      padding: 0 0 330px;
      &__text {
        width: 90%;
        font-size: 14px;
      }
      &__image {
        &-wrap {
          left: calc(50% - 200px);
          width: 400px;
          height: 390px;
        }
      }
    }
  }
  @media screen and ( max-width: 576px ) {
    .v-section-main {
      padding: 0 0 210px;
      &__image {
        &-wrap {
          left: calc(50% - 150px);
          width: 300px;
          height: 290px;
        }
      }
    }
  }
</style>