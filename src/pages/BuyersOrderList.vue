<!-- Страница "список заявок покупателя" -->
<template>
  <div>
    <d-lawyer-navbar></d-lawyer-navbar>
    <div>
      <div class="container">
        <div class="regIndividual-top-container">
          <h1 class="regIndividual-title title">Мои претензии</h1>
          <div class="regIndividual-container-btn">
            <reg-btn>Входящие</reg-btn>
            <reg-btn>Все</reg-btn>
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
  components: {RegBtn, LawyerFooter, DLawyerNavbar}
}
</script>

<style scoped>

</style>