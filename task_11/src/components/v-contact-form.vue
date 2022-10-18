<template>
  <div class="v-contact-form">
    <form class="form" @submit.prevent="onSubmit">
      <input
        type="text"
        class="form__input"
        id="name"
        v-model="name"
        name="name"
        placeholder="Your name"
        minlength="2"
        maxlength="15">
      <input
        type="tel"
        class="form__input"
        id="phone"
        v-model="phone"
        name="phone"
        placeholder="Phone number"
        :class="{'not-valid': failedValidation.phone, 'valid': failedValidation.phone === false}"
        @input="onlyNumbers"
        maxlength="13">
      <input
        type="submit"
        class="form__input form__submit"
        value="Сall back">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'v-contact-form',
    data() {
      return {
        failedValidation: {
          phone: null
        },
        phone: '',
        name: null,
        errors: []
      }
    },
    methods: {
      onlyNumbers() {
        this.failedValidation.phone = !/^\+[\d]{12}$/.test(this.phone) ? true : false;
      },
      onSubmit() {
        if (this.name && this.phone && !this.failedValidation.phone) {
          let formData = {
            name: this.name,
            phone: this.phone
          }
          console.log(formData);
          this.name = null;
          this.phone = null;
          alert('Thank you, your application has been sent successfully');
        } else {
          if (this.errors.length > 0) {
            this.errors.splice(0, this.errors.length);
          }
          if(!this.name) this.errors.push('Name required.');
          if(!this.phone) this.errors.push('Phone required.');
          if(this.failedValidation.phone) {
            this.errors.push('Enter your phone number in international format starting with "+" sign');
          }
          alert(this.errors);
        }
      }
    }
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
        width: 50px;
        height: 50px;
        background: url('../assets/images/icons/arrow.png') no-repeat;
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
  .not-valid {border: 1px solid red;}
  .valid {border: 1px solid lightgreen;}
  @media screen and ( max-width: 992px ) {
    .form {
      &__input {
        padding: 0 0 0 20px;
        width: 28%;
        max-width: 260px;
        height: 40px;
        border-radius: 20px;
      }
      &__submit {
        padding: 0;
        font-size: 16px;
      }
    }
  }
  @media screen and ( max-width: 760px ) {
    .form {
      &__input {
        height: 30px;
        border-radius: 15px;
        font-size: 12px;
      }
      &__submit {
        padding: 0;
        font-size: 14px;
      }
    }
  }
  @media screen and ( max-width: 576px ) {
    .form {
      flex-direction: column;
      &__input {
        margin-bottom: 15px;
        width: 90%;
        max-width: 300px;
      }
      &__submit {
        padding: 0;
        font-size: 14px;
      }
    }
  }
</style>