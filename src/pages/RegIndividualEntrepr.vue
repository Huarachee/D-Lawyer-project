<!-- Страница "регистрации ООО, ИП, Самозанятость" -->
<template>
  <div>
    <d-lawyer-navbar></d-lawyer-navbar>
    <div>
      <div class="container">
        <div class="regIndividual-entrepr-top-container">
          <h1 class="regIndividual-entrepr-title title">Продавец</h1>
          <div class="regIndividual-entrepr-container-btn">
            <reg-btn @click="$router.push('/registration-of-an-individual')">Физическое лицо </reg-btn>
            <reg-btn class="active">Юридическое лицо</reg-btn>
          </div>
        </div>
        <!-- Юридический статус -->
        <div class="legal-status-container">
          <h4 class="legal-status-container__subtitle subtitle">Юридический статус</h4>
          <div class="legal-status-container__radio-box">
            <label class="radio-box__item">
              <input class="item__input-radio" type="radio" name="legal-status">
              <span class="item__text">ООО</span>
            </label>
            <label class="radio-box__item">
              <input class="item__input-radio" type="radio" name="legal-status">
              <span class="item__text">ИП</span>
            </label>
            <label class="radio-box__item">
              <input class="item__input-radio" type="radio" name="legal-status">
              <span class="item__text">Самозанятость</span>
            </label>
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
import RegBtn from "../components/UI/RegBtn";

export default {
  components: {
    RegBtn,
    LawyerFooter,
    DLawyerNavbar
  }
}
</script>

<style scoped>
.regIndividual-entrepr-top-container{
  display: flex;
}

.regIndividual-entrepr-title{

}

.reg-btn{
  border-radius: 10px 0 0 10px;
}

.active{
  background-color: #222222;
  color: #ffffff;
}

.reg-btn:last-child{
  border-radius: 0 10px 10px 0;
}

.item__text{
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
}

.legal-status-container{
  display: flex;
}

.legal-status-container__radio-box{
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
</style>