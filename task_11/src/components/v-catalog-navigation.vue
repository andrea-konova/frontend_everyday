<template>
  <div class="v-catalog-navigation">
    <input type="radio" name="tab-btn" id="button-1" class="v-radio-button" value="" checked>
    <label for="button-1" class="v-label">Pizza</label>
    <input type="radio" name="tab-btn" id="button-2" class="v-radio-button" value="">
    <label for="button-2" class="v-label">Sushi</label>
    <input type="radio" name="tab-btn" id="button-3" class="v-radio-button" value="">
    <label for="button-3" class="v-label">Salad</label>
    <input type="radio" name="tab-btn" id="button-4" class="v-radio-button" value="">
    <label for="button-4" class="v-label">Dessert</label>
    <input type="radio" name="tab-btn" id="button-5" class="v-radio-button" value="">
    <label for="button-5" class="v-label">Drinks</label>
  </div>
</template>

<script>
  export default {
    name: 'v-catalog-navigation',
    components: {},
    props: {},
    data() {
      return {
        
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {}
  }
</script>

<style lang="scss">
  .v-catalog-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 50px;
    width: 80%;
    max-width: 830px;
  }
  .v-radio-button {
  display: none;
  }
  .v-label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 135px;
    height: 55px;
    border: none;
    border-radius: 27px;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    background: $gradient1;
    color: #151515;
    transition: all 0.3s;
  }
  .v-label:hover {
    cursor: pointer;
    background: $blue;
    opacity: 1;
    color: $white;
  }
  input:checked+label.v-label {
    background: $blue;
    opacity: 1;
    color: $white;
  }
</style>