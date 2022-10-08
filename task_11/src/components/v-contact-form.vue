<template>
  <div class="v-contact-form">
    <form class="form" @submit.prevent="onSubmit">
      <!-- <p v-if="errors.length">
        <b>Пожалуйста исправьте указанные ошибки:</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p> -->
      <input
        type="text" 
        class="form__input" 
        id="name" 
        v-model="name" 
        placeholder="Your name" 
        required>
      <input
        type="tel" 
        class="form__input" 
        id="phone" v-model="phone" 
        placeholder="Phone number" 
        required 
        pattern="^\+380\d{3}\d{2}\d{2}\d{2}$">
      <input type="submit" class="form__input form__submit" value="Сall back">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'v-contact-form',
    components: {},
    props: {},
    data() {
      return {
        name: null,
        phone: null,
        errors: []
      }
    },
    computed: {},
    methods: {
      onSubmit() {
        if (this.name && this.phone) {
          let formData = {
            name: this.name,
            phone: this.phone
          }
          console.log(formData);
          this.name = null;
          this.phone = null;
        } else {
          if(!this.name) this.errors.push('Name required.');
          if(!this.phone) this.errors.push('Phone required.');
          console.log(this.errors);
        }
      }
    },
    watch: {},
    mounted() {}
  }
</script>

<style lang="scss">
  .v-contact-form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 48px auto;
    width: 80%;
    max-width: 857px;
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &__input {
      padding: 0 0 0 30px;
      width: 28%;
      max-width: 260px;
      height: 60px;
      background: $white;
      border: 2px solid #ECEEF7;
      border-radius: 30px;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #222222;
    }
    &__submit {
      padding: 0;
      font-weight: 700;
      font-size: 18px;
      line-height: 140%;
      color: $white;
      background: linear-gradient(180deg, #FE5626 0%, #F23F0E 100%), #59AAF1;
      box-shadow: 0px 4px 8px rgba(205, 169, 41, 0.26);
      transition: all 0.3s;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 9px;
        background: url('../assets/images/icons/arrow.svg') no-repeat;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
      }
      &:hover {
        cursor: pointer;
        color: $black;
      }
    }
  }
</style>