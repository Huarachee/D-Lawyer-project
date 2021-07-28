<!-- Страница "регистрация физического лица" -->
<template>
  <div>
    <d-lawyer-navbar></d-lawyer-navbar>
    <div>
      <div class="container">
        <div class="regIndividual-top-container">
          <h1 class="regIndividual-title title">Тип пользователя</h1>
          <div class="regIndividual-container-btn">
            <reg-btn class="active">Покупатель</reg-btn>
            <reg-btn @click="$router.push('/registration-of-an-individual-entrepreneur')">Продавец</reg-btn>
          </div>
        </div>
        <div class="d-lawyer-line"></div>


        <form class="form-reg" @submit.prevent="handleSubmit">
          <div class="d-lawyer-line"></div>
          <!-- Контактные данные -->
          <div class="contact-details-container">
            <h4 class="contact-details-container__subtitle subtitle">Контактные данные</h4>
            <div class="contact-details-container__label-box">
              <label class="label-box__label d-lawyer-label" for="surname">Фамилия</label>
              <d-lawyer-input id="surname"
                              type="text"
                              v-validate="'required'"
                              placeholder="Введите фамилию..."
                              :class="{ 'is-invalid': submitted && errors.has('surname') }"
              ></d-lawyer-input>
<!--              <div v-if="submitted && errors.has('surname')" class="invalid-feedback">{{ errors.first('surname') }}</div>-->

              <label class="label-box__label d-lawyer-label" for="first-name">Имя</label>
              <d-lawyer-input id="first-name"
                              type="text"
                              v-validate="'required'"
                              placeholder="Введите имя..."
                              :class="{ 'is-invalid': submitted && errors.has('firstName') }"
              ></d-lawyer-input>
<!--              <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>-->

              <label class="label-box__label d-lawyer-label" for="middle-name">Отчество</label>
              <d-lawyer-input id="middle-name"
                              type="text"
                              v-validate="'required'"
                              placeholder="Введите отчество..."
                              :class="{ 'is-invalid': submitted && errors.has('middleName') }"
              ></d-lawyer-input>
<!--              <div v-if="submitted && errors.has('middleName')" class="invalid-feedback">{{ errors.first('middleName') }}</div>-->

              <label class="label-box__label d-lawyer-label" for="telephone">Телефон</label>
              <d-lawyer-input id="telephone"
                              type="tel"
                              v-validate="'required'"
                              placeholder="Введите телефон..."
                              :class="{ 'is-invalid': submitted && errors.has('telephone') }"
              ></d-lawyer-input>
              <label class="label-box__label d-lawyer-label" for="email">Э/почта</label>
              <d-lawyer-input id="email"
                              type="email"
                              v-validate="'required'"
                              placeholder="Введите электронную почту"
                              :class="{ 'is-invalid': submitted && errors.has('email') }"
              ></d-lawyer-input>
<!--              <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>-->

              <label class="label-box__label d-lawyer-label" for="email">Адрес проживания</label>
              <d-lawyer-input id="address"
                              type="text"
                              v-validate="'required'"
                              placeholder="Введите адрес проживания"
                              :class="{ 'is-invalid': submitted && errors.has('address') }"
              ></d-lawyer-input>
<!--              <div v-if="submitted && errors.has('address')" class="invalid-feedback">{{ errors.first('address') }}</div>-->
            </div>
          </div>
          <div class="d-lawyer-line"></div>

          <!-- Адреса в интернете -->
          <div class="internet-addresses-container">
            <h4 class="internet-addresses-container__subtitle subtitle">Адреса в интернете</h4>
            <div class="internet-addresses-container__label-box">
              <label class="label-box__label d-lawyer-label" for="online-store-link">Сайт
                интернет-магазина</label>
              <d-lawyer-input id="online-store-link"
                              type="text"
                              v-validate="'required'"
                              placeholder="Введите ссылку интернет-магазина..."
                              :class="{ 'is-invalid': submitted && errors.has('onlineStoreLink') }"
              ></d-lawyer-input>
<!--              <div v-if="submitted && errors.has('onlineStoreLink')" class="invalid-feedback">{{ errors.first('onlineStoreLink') }}</div>-->

              <label class="label-box__label d-lawyer-label" for="social-store-page1">Страницы магазина в
                соцсетях</label>
              <d-lawyer-input class="input-1"
                              id="social-store-page1"
                              type="text"
                              v-validate="'required'"
                              placeholder="Введите ссылку магазина в соц-сетях..."></d-lawyer-input>

              <d-lawyer-input class="input-2"
                              id="social-store-page2"
                              type="text"
                              v-validate="'required'"
                              placeholder="Введите ссылку магазина в соц-сетях..."></d-lawyer-input>

              <d-lawyer-input class="input-3"
                              id="social-store-page3"
                              type="tel"
                              v-validate="'required'"
                              placeholder="Введите ссылку магазина в соц-сетях..."></d-lawyer-input>
            </div>
          </div>
          <div class="d-lawyer-line"></div>

          <!-- Товарная категория -->
          <div class="product-category-container">
            <h4 class="product-category-container__subtitle subtitle">Товарная категория</h4>
            <div class="product-category-container__label-box">
              <label class="label-box__label">
                <input class="label__input" type="radio" name="product">
                <span class="label__text">Одежда, обувь, аксессуары</span>
              </label>
              <label class="label-box__label">
                <input class="label__input" type="radio" name="product">
                <span class="label__text">Техника и электроника</span>
              </label>
              <label class="label-box__label">
                <input class="label__input" type="radio" name="product">
                <span class="label__text">Красота и здоровье</span>
              </label>
              <label class="label-box__label">
                <input class="label__input" type="radio" name="product">
                <span class="label__text">Продукты питания</span>
              </label>
            </div>
          </div>

          <!-- Пароль -->
          <div class="password-container">
            <h4 class="password-container__subtitle subtitle">Пароль</h4>
            <div class="password-container__label-box">
              <label class="label-box__label d-lawyer-label" for="password">Пароль (не менее 6 символов a–Z,
                0–9)</label>
              <d-lawyer-input id="password"
                              type="text"
                              v-validate="{ required: true, min: 6 }"
                              placeholder="Введите пароль (не менее 6 символов a–Z, 0–9)"></d-lawyer-input>
              <button class="lawyer-btn" type="submit">Создать учётную запись покупателя</button> <!-- :disabled="status.registering" -->
            </div>
          </div>
        </form>
      </div>
    </div>
    <lawyer-footer></lawyer-footer>
  </div>
</template>

<script>
import DLawyerNavbar from "../components/UI/DLawyerNavbar";
import LawyerFooter from "../components/UI/LawyerFooter";
import DLawyerInput from "../components/UI/DLawyerInput";
import RegBtn from "../components/UI/RegBtn";
import {mapActions, mapState} from "vuex";

export default {
  components: {
    RegBtn,
    DLawyerInput,
    LawyerFooter,
    DLawyerNavbar
  },
  data () {
    return {
      user: {
        surname: "",
        firstName: "",
        middleName: "",
        telephone: "",
        email: "",
        address: "",
        onlineStoreLink: "",
        socialStorePage: "",
        password: ""
      },
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['register']),
    // handleSubmit(e) {
    //   this.submitted = true;
    //   this.$validator.validate().then(valid => {
    //     if (valid) {
    //       this.register(this.user);
    //     }
    //   });
    // }
  }
}
</script>

<style scoped>
.regIndividual-title {
  margin: 74px 72px 46px 0;
}

.reg-btn {
  border-radius: 10px 0 0 10px;
}

.reg-btn:last-child {
  border-radius: 0 10px 10px 0;
}

.regIndividual-top-container,
.internet-addresses-container,
.product-category-container {
  display: flex;
}

.active{
  background-color: #222222;
  color: #ffffff;
}

.contact-details-container,
.internet-addresses-container {
  display: flex;
}

.subtitle {
  margin: 50px 120px 100px 0;
}

.password-container__subtitle{
  margin: 50px 120px 100px 30px;
}

.contact-details-container__label-box {
  margin-bottom: 60px;
}

.internet-addresses-container__label-box {
  margin-bottom: 45px;
}

.product-category-container__label-box {
  margin: 33px 0 67px 0;
}

.password-container__label-box{
  margin-left: 146px;
}

.contact-details-container__label-box,
.internet-addresses-container__label-box,
.product-category-container__label-box,
.password-container__label-box {
  display: flex;
  flex-direction: column;
}


.form-reg {
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
}

.d-lawyer-label{
  margin: 21px 0 10px 5px;
}

.input-1,
.input-2 {
  margin-bottom: 20px;
}

.password-container {
  width: 1260px;
  height: 220px;
  position: relative;
  left: -30px;
  background: #F4F4F4;
  display: flex;
  border-radius: 6px;
  padding-left: -10px;
}

.lawyer-btn{
  width: 349px;
  height: 40px;
  border-radius: 4px;
  margin-top: 40px;
}
</style>