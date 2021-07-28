<!-- Страница тарифов -->
<template>
  <div>
    <d-lawyer-navbar></d-lawyer-navbar>
    <div>
      <div class="container">
        <div class="tariff-card-container">
          <div class="card card-1">
            <div class="card__top-bg card__top-bg--1">
              <img src="../assets/images/top-bg__image--1.svg" alt="" class="top-bg__img top-bg__img--1">
            </div>
            <p class="card__price">399 ₽ в год</p>
            <p class="card__sub-price">для потребителя</p>
            <div class="card__points-container">
              <ul class="card__points" v-for="pointsOneItem in pointsOneItems">
                <li class="points__item">{{ pointsOneItem.text }}</li>
              </ul>
            </div>
          </div>
          <div class="card card-2">
            <div class="card__top-bg card__top-bg--2">
              <img src="../assets/images/top-bg__image--2.svg" alt="" class="top-bg__img top-bg__img--2">
            </div>
            <p class="card__price">19 990 ₽ в год</p>
            <p class="card__sub-price">для юридических лиц</p>
            <div class="card__points-container">
              <ul class="card__points" v-for="pointsTwoItem in pointsTwoItems">
                <li class="points__item">{{ pointsTwoItem.text }}</li>
              </ul>
            </div>
          </div>
          <div class="card card-3">
            <div class="card__top-bg card__top-bg--3">
              <img src="../assets/images/top-bg__image--3.svg" alt="" class="top-bg__img top-bg__img--3">
            </div>
            <p class="card__price">Бесплатно</p>
            <p class="card__sub-price">пробный доступ</p>
            <div class="card__points-container">
              <ul class="card__points" v-for="pointsThreeItem in pointsThreeItems">
                <li class="points__item">{{ pointsThreeItem.text }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tariffs-create-an-account">
          <p class="tariffs-create-an-account__text">
            Чтобы пользоваться сервисом DIGITAL LAWYER по любому тарифу, вам необходимо
          </p>
          <button class="lawyer-btn" @click="$router.push('/login')">Авторизоваться</button>
          <h4 class="autr-reg-subtitle title">или</h4>
          <button class="lawyer-btn" @click="$router.push('/registration-of-an-individual')">Создать учётную запись</button>
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
  },
  data() {
    return{
      pointsOneItems: [
        {text: 'Решение проблем по возврату товара с нашими партнёрами онлайн'},
        {text: 'Решение проблем с любым магазином, мы подготовим полный пакет документов'},
        {text: 'Поддержка 24/7'}
      ],
      pointsTwoItems: [
        {text: 'Решение ваших проблем с возвратом товара'},
        {text: 'Персонализированная страница вашей организации'},
        {text: 'Помощь в решении спорных вопросов с клиентом'},
        {text: 'Поддержка 24/7'}
      ],
      pointsThreeItems: [
        {text: 'Оформление одной заявки на возврат'}
      ]
    }
  }
}
</script>

<style scoped>
.tariff-card-container{
  display: flex;
  justify-content: space-around;
  margin: 88px 0 60px 0;
}

.card{
  width: 300px;
  height: 500px;
  border-radius: 10px;
  cursor: pointer;
}

.card:hover{
  transform: scale(1.02);
}

.card-1{
  border: 1px solid #FFCBA4;
}

.card-2{
  border: 1px solid #9AD0F8;
}

.card-3{
  border: 1px solid #87DC53;
}

.card__top-bg{
  height: 170px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
}

.card__top-bg--1{
  background-color: #FFEDAD;
}

.card__top-bg--2{
  background-color: #DBF0FF;
}

.card__top-bg--3{
  background-color: #D5FFE0;
}

.top-bg__img{
  position: absolute;
  margin-top: 36px;
}

.card__price{
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-top: 53px;
  text-align: center;
}

.card__sub-price{
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.tariffs-create-an-account{
  margin: 0 auto 70px 0;
  text-align: center;
}

.tariffs-create-an-account__text{
  width: 368px;
  margin: 0 auto;
}

.lawyer-btn{
  margin-top: 22px;
  width: 254px;
}

.card__points-container{
  padding: 30px 22px;
  width: 230px;
  margin: 0 auto;
}

.card__points{
  margin-bottom: 15px;
}

.card__points:last-child{
  margin-bottom: 0;
}

.points__item{
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 10px;
}

.autr-reg-subtitle{
  margin-top: 15px;
}
</style>