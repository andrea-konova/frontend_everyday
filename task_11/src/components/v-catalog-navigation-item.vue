<template>
  <div class="v-catalog-navigation-item">
    <input
      type="radio"
      name="tab-btn"
      :id="category.id"
      class="v-radio-button"
      value=""
      :checked="category.checked"
      @click="sortByCategories">
    <label :for="category.id" class="v-label">{{category.name}}</label>
  </div>
</template>

<script>
  export default {
    name: 'v-catalog-navigation-item',
    props: {
      category: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      sortByCategories() {
        this.$emit('sortByCategories', this.category.name);
      }
    }
  }
</script>

<style lang="scss">
  .v-radio-button {
  display: none;
  }
  .v-label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 35px;
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
  @media screen and ( max-width: 992px ) {
    .v-label {
      padding: 10px 25px;
      border-radius: 25px;
      font-size: 14px;
    }
  }
  @media screen and ( max-width: 576px ) {
    .v-label {
      margin-bottom: 15px;
    }
  }
</style>