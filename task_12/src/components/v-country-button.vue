<template>
  <button class="v-country-button">{{borders_data}}</button>
</template>

<script>

  export default {
    name: 'v-country-button',
    props: {
      borders_data: {
        type: String,
        default() {
          return ''
        }
      }
    }
  }
</script>

<style lang="scss">
  .v-country-button {
    margin: 0 10px 10px 0;
    padding: 5px 28px;
    font-weight: 300;
    font-size: 14px;
    background: var(--white-bg);
    color: var(--dark-text);
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
    border: none;
    border-radius: 2px;
    text-transform: capitalize;
  }
</style>