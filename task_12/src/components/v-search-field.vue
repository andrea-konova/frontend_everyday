<template>
  <div class="v-search-field">
    <button class="v-search-field__button">
    </button>
    <input
      type="text"
      class="v-search-field__input"
      v-model="searchValue"
      name="name"
      placeholder="Search for a country…"
    >
  </div>
</template>

<script>

  export default {
    name: 'v-search-field',
    data() {
      return {
        searchValue: ''
      }
    }
  }
</script>

<style lang="scss">
  .v-search-field {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 4px;
    width: 480px;
    padding: 18px 32px;
    background-color: $white-bg;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    &__button {
      width: 18px;
      height: 18px;
      margin-right: 24px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      background-image: url('../assets/images/icons/search-white.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__input {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: $search-text;
      border: none;
      background-color: transparent;
    }
  }
  @media screen and ( max-width: 992px ) {
    .v-search-field {
      width: 380px;
    }
  }
  @media screen and ( max-width: 760px ) {
    .v-search-field  {
      margin-bottom: 40px;
      &__button {
        width: 16px;
        height: 16px;
      }
      &__input {
        font-size: 12px;
      }
    }
  }
  @media screen and ( max-width: 576px ) {
    .v-search-field {
      width: 220px;
    }
  }
</style>