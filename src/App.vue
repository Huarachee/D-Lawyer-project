<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (to, from) {
      // Оповещение об изменении местоположении
      this.clearAlert();
    }
  }
};
</script>

<style>
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  font-family: 'Lato',sans-serif;
  font-weight: 400;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Lato';
  src: local('Lato-Regular'), local('Lato-Regular'),
  url('./assets/fonts/Lato-Regular.ttf') format('woff');
  font-weight: 400;
  font-style: normal;
}

.container{
  width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}

.title{
  font-size: 34px;
  font-weight: 500;
}

.subtitle{
  font-size: 24px;
  letter-spacing: 1px;
}

.item__link{
  font-weight: 600;
  font-size: 14px;
  color: #006ECF;
  cursor: pointer;
}

/* Глобальные стили кнопок -- НАЧАЛО */
.lawyer-btn{
  background-color: #007FEF;
  color: #ffffff;
  border: 0;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  padding: 9px 30px;
  width: 230px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .4s;
}

.lawyer-btn:hover{
  background-color: #0167c2;
}
/* Глобальные стили кнопок -- КОНЕЦ */

.d-lawyer-label{
  font-size: 14px;
  letter-spacing: 1px;
}

.d-lawyer-line{
  width: 100%;
  height: 1px;
  background-color: #222222;
  opacity: 0.2;
}

/* Изменяем скролл */
::-webkit-scrollbar{
  width: 11px;
}

::-webkit-scrollbar-thumb{
  background-color: #cdc8c8;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover{
  background-color: #a7a4a4;
}

.invalid-feedback{
  color: #f80a0a;
}
</style>
