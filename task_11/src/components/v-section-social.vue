<template>
  <div class="v-section-social">
    <div class="v-section-social-container">
      <div class="v-section-social__image-wrap">
        <img src="../assets/images/social/1.jpg" alt="image" class="v-section-social__image">
      </div>
      <div class="v-section-social__image-wrap">
        <img src="../assets/images/social/2.jpg" alt="image" class="v-section-social__image">
      </div>
      <div class="v-section-social__image-wrap">
        <img src="../assets/images/social/3.jpg" alt="image" class="v-section-social__image">
      </div>
      <div class="v-section-social__image-wrap">
        <img src="../assets/images/social/4.jpg" alt="image" class="v-section-social__image">
      </div>
      <div class="v-section-social__image-wrap">
        <img src="../assets/images/social/5.jpg" alt="image" class="v-section-social__image">
      </div>
      <div class="v-section-social__image-wrap">
        <img src="../assets/images/social/6.jpg" alt="image" class="v-section-social__image">
      </div>
    </div>
    <div class="v-section-social__link-wrap">
      <div class="v-section-social__link">
        <p class="v-section-social__link-text">
          Instagram: &nbsp;<a href="https://www.instagram.com/classic_kovel/" class="v-section-social__link-instagram">@classic_kovel</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-section-social'
  }
</script>

<style lang="scss">
  .v-section-social {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 127px 0;
    overflow: hidden;
    position: relative;
    &-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      width: 1760px;
    }
    &__image {
      width: 100%;
      height: 100%;
      &-wrap {
        width: 260px;
        height: 260px;
        object-position: center;
        object-fit: contain;
        margin: 0 20px;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, rgba(37, 77, 124, 0.4), rgba(37, 77, 124, 0.4));
          z-index: 2;
        }
      }
    }
    &__link {
      display: flex;
      align-content: center;
      justify-content: center;
      width: 440px;
      height: 140px;
      border: 1px solid rgba($color: #ffffff, $alpha: 0.1);
      border-radius: 15px;
      &-wrap {
        position: absolute;
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 20px;
        z-index: 3;
        background: linear-gradient(45.04deg, #FD9924 -51.05%, #F65B16 134.89%);
        box-shadow: 0px 70px 90px rgba(253, 55, 36, 0.2), 0px 35px 50px rgba(253, 55, 36, 0.2), 0px 20px 25px rgba(253, 55, 36, 0.2);
        border-radius: 15px;
      }
      &-text {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: $white;
      }
      &-instagram {
        color: $white;
        font-weight: 700;
        transition: all 0.3s;
        &:hover {
          color: $black;
        }
      }
    }
  }
  @media screen and ( max-width: 992px ) {
    .v-section-social {
      margin: 0 0 80px 0;
      &__image {
        &-wrap {
          width: 220px;
          height: 220px;
        }
      }
      &__link {
        width: 350px;
        height: 100px;
        &-text {
          font-size: 20px;
          line-height: 140%;
        }
      }
    }
  }
  @media screen and ( max-width: 760px ) {
    .v-section-social {
      margin: 0 0 80px 0;
      &__image {
        &-wrap {
          width: 200px;
          height: 200px;
        }
      }
      &__link {
        width: 250px;
        height: 80px;
        &-text {
          font-size: 16px;
        }
      }
    }
  }
</style>