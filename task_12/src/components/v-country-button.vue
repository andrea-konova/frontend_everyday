<template>
  <button class="v-country-button">Country</button>
</template>

<script>

  export default {
    name: 'v-country-button',
    props: {
      borders_data: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss">
  .v-country-button {
    margin-right: 10px;
    padding: 5px 28px;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    background: $white-bg;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
    border: none;
    border-radius: 2px;
  }
</style>