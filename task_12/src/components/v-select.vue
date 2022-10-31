<template>
  <div class="v-select">
    <p
      class="v-select__title"
      @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div
      class="v-select__options"
      v-if="areOptionsVisible"
    >
      <p
        class="v-select__options-item"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-select',
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        areOptionsVisible: false
      }
    },
    methods: {
      selectOption(option) {
        this.$emit('select', option);
        this.areOptionsVisible = false;
      },
      hideSelect() {
        this.areOptionsVisible = false;
      }
    },
    mounted() {
      document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
      document.removeEventListener('click', this.hideSelect)
    }
  }
</script>

<style lang="scss">
  .v-select {
    width: 200px;
    text-align: left;
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: $dark-text;
    cursor: pointer;
    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 4px;
      padding: 18px 24px;
      border-radius: 5px;
      background-color: $white-bg;
      box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
      &::after {
        content: '';
        width: 9px;
        height: 6px;
        background-image: url('../assets/images/icons/select-arrow.svg');
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__options {
      background-color: $white-bg;
      padding: 16px 24px;
      border-radius: 5px;
      box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
      width: 152px;
      position: absolute;
      top: 60px;
      left: 0;
      &-item {
        margin: 0 0 8px;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
</style>