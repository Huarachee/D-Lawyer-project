<template>
  <div class="footer">
    <div class="container">
      <div class="footer-container">
      <div class="footer-logo">
        <img class="footer-logo__img" src="@/assets/images/footer-logo.svg" alt="" width="45.33" height="40">
        <div class="footer-logo__logo-text">
          <p class="logo-text__title">DIGITAL LAWYER</p>
          <p class="logo-text__sub-text">© Онлайн-сервис Digital Lawyer, 2021</p>
        </div>
      </div>
      <a href="#" class="footer-container__pers-data-stor-pol">Политика хранения персональных данных</a>
        <div class="footer-container__digital-agency">
          <img class="digital-agency__img" src="@/assets/images/digital-agency-logo.svg" alt="" width="16" height="16">
          <a class="digital-agency__title" href="https://webrover.ru/">Разработка агентства WEBROVER</a>
        </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style scoped>
.footer{
  height: 100px;
  background: #F4F4F4;
}

.footer-container{
  display: flex;
}

.footer-logo{
  display: flex;
  padding: 30px 0 30px 0;
  color: #808080;
}

.footer-logo__img{
  margin-right: 18px;
}

.footer-logo__logo-text{
  line-height: 20px;
  margin-top: 1px;
}

.logo-text__title{
  font-family: Lato, sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
}

.footer-container__pers-data-stor-pol{
  color: #000;
  font-weight: 600;
  text-decoration: none;
  margin: 53px 0 0 30px;
  height: 18px;
  transition: all .4s;
}

.footer-container__pers-data-stor-pol:hover{
  color: #006ECF;
}

.footer-container__digital-agency{
  display: flex;
  height: 16px;
  margin: 55px 0 0 240px;
}

.digital-agency__title{
  font-size: 12px;
  color: #808080;
  font-weight: 400;
  margin-left: 7px;
  text-decoration: none;
  transition: all .4s;
}

.digital-agency__title:hover{
  color: #000;
}
</style>