<template>
  <div class="v-header">
    <div class="v-container v-header__container">
      <h1 class="v-header__title">Where in the world?</h1>
      <button class="v-header__toggle-button">Dark Mode</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-header',
    methods: {}
  }
</script>

<style lang="scss">
  .v-header {
    color: $dark-text;
    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 0;
    }
    &__title {
      margin: 0;
      font-weight: 800;
      font-size: 24px;
      line-height: 33px;
    }
    &__toggle-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      color: $dark-text;
      background-color: transparent;
      border: none;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      &::before {
        content: '';
        padding-left: 10px;
        width: 15px;
        height: 15px;
        background-image: url('../assets/images/icons/light.svg');
        background-repeat: no-repeat;
        background-size: contain;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media screen and ( max-width: 576px ) {
    .v-header {
      &__container {
        padding: 30px 0;
      }
      &__title {
        font-size: 14px;
        line-height: 20px;
      }
      &__toggle-button {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
</style>