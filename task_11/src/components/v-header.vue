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
        <div class="v-burger" id="burger" v-on:click="toggleMenu">
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
    methods: {
      toggleMenu() {
        const burgerBtn = document.querySelector('.v-burger');
        const headerMenu = document.querySelector('.v-header__burger-wrap');

        burgerBtn.classList.toggle('v-burger--active');
        headerMenu.classList.toggle('v-header__burger-wrap-hide');
      }
    }
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
    &__logo {
      margin-left: 40px;
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
  @media screen and ( max-width: 992px ) {
    .v-info {
      flex-direction: column;
      &__times {
        margin: 0 0 10px 0;
        font-size: 14px;
      }
      &__phone {
        font-size: 16px;
        line-height: 20px;
        &::before {
          width: 25px;
          height: 25px;
          top: calc(50% - 12px);
          left: -25px;
        }
      }
    }
    .v {
      &-menu {
        flex-direction: column;
        &__item {
          margin: 0 0 40px 0;
          &:last-child {
            margin: 0;
          }
        }
      }
      &-header__logo {
        order: 3;
      }
      &-burger {
        display: block;
        margin-top: 10px;
        width: 40px;
        height: 40px;
        position: relative;
        z-index: 4;
        overflow: hidden;
        border-radius: 50%;
        background-color: transparent;
        order: 2;
      }
      &-burger span {
        position: absolute;
        width: 40px;
        height: 1px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.5s;
        background-color: $orange;
      }
      &-burger span:nth-of-type(2) {
        top: calc(50% - 12px);
      }
      &-burger span:nth-of-type(3) {
        top: calc(50% + 12px);
      }
      &-burger--active span:nth-of-type(1) {
        display: none;
      }
      &-burger--active span:nth-of-type(2) {
        top: 50%;
        background-color: $orange;
        height: 2px;
        transform: translate(-50%, 0%) rotate(45deg);
      }
      &-burger--active span:nth-of-type(3) {
        top: 50%;
        background-color: $orange;
        height: 2px;
        transform: translate(-50%, 0%) rotate(-45deg);
      }
    }
    .v-header {
      &__info {
        order: 4;
      }
      &__burger-wrap {
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        padding-bottom: 20px;
        z-index: 4;
        width: 100%;
        border: 3px solid $orange;
        border-radius: 20px;
        background-color: $main-bg;
        transform: translateX(-100%);
        transition: transform 0.5s;
        overflow: hidden;
      }
      &__burger-wrap-hide {
        transform: translateX(0);
      }
    }
  }
  @media screen and ( max-width: 576px ) {
    .v-header__logo {
      display: none;
    }
  }
</style>