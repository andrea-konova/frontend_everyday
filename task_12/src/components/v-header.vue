<template>
  <div class="v-header">
    <div class="v-container v-header__container">
      <h1 class="v-header__title">Where in the world?</h1>
      <button v-if="!THEME" @click="toggleTheme(THEME)" class="v-header__toggle-button v-header__toggle-button--dark">Dark Mode</button>
      <button v-else @click="toggleTheme(THEME)" class="v-header__toggle-button ">Dark Mode</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'v-header',
    computed: {
      ...mapGetters([
        'THEME'
      ])
    },
    methods: {
      toggleTheme(THEME) {
        const toggleButton = document.querySelector('.v-header__toggle-button');
        const searchButton = document.querySelector('.v-search-field__button');
        const selectButton = document.querySelector('.v-select__title');
        const countryButton = document.querySelector('.v-country__button');

        let darkText = '#111517',
          lightBg = '#F2F2F2',
          whiteBg = '#FFFFFF',
          searchText = '#848484';

        let root = document.documentElement;

        const changeTheme = () => {
          if (!THEME) {
            darkText = '#111517',
            lightBg = '#F2F2F2',
            whiteBg = '#FFFFFF',
            searchText = '#848484';

            root.style.setProperty('--dark-text', darkText);
            root.style.setProperty('--light-bg', lightBg);
            root.style.setProperty('--white-bg', whiteBg);
            root.style.setProperty('--search-text', searchText);

            toggleButton.classList.remove('v-header__toggle-button--dark');
            if (searchButton) {
              searchButton.classList.remove('v-search-field__button--dark');
            }
            if (selectButton) {
              selectButton.classList.remove('v-select__title--dark');
            }
            if (countryButton) {
              countryButton.classList.remove('v-country__button--dark');
            }

            this.$store.commit('SET_THEME', true)
          } else {
            darkText = '#FFFFFF',
            lightBg = '#202C36',
            whiteBg = '#2B3844',
            searchText = '#FFFFFF';

            root.style.setProperty('--dark-text', darkText);
            root.style.setProperty('--light-bg', lightBg);
            root.style.setProperty('--white-bg', whiteBg);
            root.style.setProperty('--search-text', searchText);

            toggleButton.classList.add('v-header__toggle-button--dark');
            if (searchButton) {
              searchButton.classList.add('v-search-field__button--dark');
            }
            if (selectButton) {
              selectButton.classList.add('v-select__title--dark');
            }
            if (countryButton) {
              countryButton.classList.add('v-country__button--dark');
            }

            this.$store.commit('SET_THEME', false)
          }
        }

        changeTheme();
      }
    }
  }
</script>

<style lang="scss">
  .v-header {
    color: var(--dark-text);
    background-color: var(--white-bg);
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
      color: var(--dark-text);
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
  .v-header__toggle-button--dark::before {
    background-image: url('../assets/images/icons/dark.svg');
  }
  @media screen and ( max-width: 760px ) {
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