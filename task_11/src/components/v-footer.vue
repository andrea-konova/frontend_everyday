<template>
  <div class="v-footer">
    <div class="v-container">
      <div class="v-row v-footer-row">
        <p class="v-footer__text">
          © Classic Family Restaurant
        </p>
        <a href="#home" class="v-footer__logo v-logo">
          <div class="v-logo__img-wrap v-footer-logo__img-wrap">
            <img src="../assets/images/logo.png" class="v-logo__img" alt="logo"/>
          </div>
        </a>
        <p class="v-footer__text">
          Made with delight by
          <a href="#" class="v-footer__dev-link"> and.k</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-footer',
    components: {},
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
  .v-footer {
    margin: 34px 0;
    &-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__text {
      margin: 15px 0 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
    }
    &-logo__img-wrap {
      width: 96px;
      height: 49px;
    }
    &__dev-link {
      font-weight: 700;
      color: $black;
      transition: all 0.3s;
      &:hover {
        color: $orange;
      }
    }
  }
</style>