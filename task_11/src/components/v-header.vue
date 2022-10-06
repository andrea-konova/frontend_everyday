<template>
  <div class="v-header">
    <div class="v-container">
      <div class="v-row v-header__row">
        <div class="v-header__burger-wrap">
          <nav class="v-header__navigation">
            <ul class="v-header__menu v-menu">
              <li class="v-menu__item">
                <a href="#" class="v-menu__item-link">Payment</a>
              </li>
              <li class="v-menu__item">
                <a href="#" class="v-menu__item-link">About us</a>
              </li>
              <li class="v-menu__item">
                <a href="#" class="v-menu__item-link">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <a href="#home" class="v-header__logo v-logo">
          <div class="v-logo__img-wrap">
            <img src="../assets/images/logo.png" class="v-logo__img" alt="logo"/>
          </div>
        </a>
        <div class="v-header__info v-info">
          <p class="v-info__times">Daily 11am - 9pm</p>
          <a href="tel:0800330898" class="v-info__phone">0 800 33 08 98</a>
        </div>
        <div class="v-burger" id="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'v-header',
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
  .v-header {
    &__row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 25px;
    }
    &__burger-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__navigation {
      margin-top: 15px;
      padding: 0;
    }
  }
  .v-burger {
    display: none;
  }
  .v-menu {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    &__item {
      margin: 0 40px 0 0;
      &:last-child {
        margin: 0;
      }
      &-link {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: $black;
        transition: all 0.3s;
        &:hover {
          color: $orange;
        }
      }
    }
  }
  .v-logo {
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      &-wrap {
        width: 112px;
        height: 67px;
      }
    }
  }
  .v-info {
    display: flex;
    align-items: center;
    margin-top: 15px;
    &__times {
      margin: 0 60px 0 0;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: calc(55% - 2px);
        left: -9px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #46CB72;
      }
    }
    &__phone {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: $black;
      transition: all 0.3s;
      position: relative;
      &:hover {
        color: $orange;
      }
      &::before {
        content: '';
        position: absolute;
        top: calc(50% - 15px);
        left: -40px;
        width: 33px;
        height: 33px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        background-image: url(../assets/images/icons/phone.png);
      }
    }
  }
</style>