<!-- Главная страница при входе в приложение -->
<template>
  <div>
    <d-lawyer-navbar></d-lawyer-navbar>
    <div>
      <div class="container">
        <div class="title-container">
          <img src="../assets/images/logo.svg" alt="" class="logo-img" width="68" height="60">
          <h1 class="title-container__header-title">DIGITAL LAWYER - сервис для решения
            правовых проблем между потребителями и онлайн-продавцами
          </h1>
        </div>
        <div class="about-us__container">
          <div class="container__box">
            <div class="box__img-1">
              <img src="../assets/images/main-illustration-1.svg" alt="" width="170" height="170">
            </div>
            <h3 class="box__title box__title-1">Регистрация покупателя</h3>
            <p class="box__text box__text-1">
              Для граждан, которые желают решить вопрос возврата товара самостоятельно,
              без привлечения услуг профессионального юриста.
            </p>
          </div>
          <div class="container__box">
            <div class="box__img-2">
              <img src="../assets/images/main-illustration-2.svg" alt="" width="170" height="170">
            </div>
            <h3 class="box__title box__title-2">Демо-доступ</h3>
            <p class="box__text box__text-2">
              Для авторизованных покупателей.
            </p>
          </div>
          <div class="container__box">
            <div class="box__img-3">
              <img src="../assets/images/main-illustration-3.svg" alt="" width="170" height="170">
            </div>
            <h3 class="box__title box__title-3">Новый продавец</h3>
            <p class="box__text box__text-3">
              Для предпринимателей, не имеющих в штате юриста,
              но желающих урегулировать претензии потребителей в рамках закона.
            </p>
          </div>
        </div>
      </div>
    </div>
    <lawyer-footer></lawyer-footer>
  </div>
</template>

<script>
import DLawyerNavbar from "../components/UI/DLawyerNavbar";
import LawyerFooter from "../components/UI/LawyerFooter";


export default {
  components: {
    LawyerFooter,
    DLawyerNavbar
  }
}
</script>

<style scoped>
.navbar{
  background-color: #fff;
}

.title-container{
  display: flex;
  margin: 80px 0 98px 0;
}

.logo-img{
  margin-top: 8px;
}

.title-container__header-title{
  width: 795px;
  margin-left: 20px;
}

.about-us__container{
  display: flex;
  justify-content: center;
  margin-bottom: 155px;
}

.container__box{
  margin-right: 100px;
}

.container__box:last-child{
  margin-right: 0;
}

.box__img-1{
  background-image: url('../assets/images/main-bg-illustration-1.svg');
  background-repeat: no-repeat;
  width: 235px;
  height: 205px;
}

.box__img-2{
  background-image: url('../assets/images/main-bg-illustration-2.svg');
  background-repeat: no-repeat;
  width: 225px;
  height: 206px;
}

.box__img-3{
  background-image: url('../assets/images/main-bg-illustration-3.svg');
  background-repeat: no-repeat;
  width: 238px;
  height: 205px;
}

.box__img-1,
.box__img-2,
.box__img-3{
  display: flex;
  justify-content: center;
  align-items: center;
}

.box__title{
  color: #007FEF;
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0 11px 0;
}

.box__title-1{
  margin-left: -14px;
}

.box__title-2,
.box__title-3{
  text-align: center;
}

.box__text{
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
}

.box__text{
  text-align: center;
}

.box__text-1{
  width: 281px;
  margin-left: -24px;
}

.box__text-3{
  width: 249px;
}
</style>