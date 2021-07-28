<!-- Страница "авторизации пользователя" -->
<template>
  <div>
    <d-lawyer-navbar></d-lawyer-navbar>
    <div>
      <div class="container">
        <div class="modal-window">
          <div class="logo" @click="$router.push('/')">
            <img src="@/assets/images/logo.svg" alt="" class="logo__img" width="24" height="20" @click="$router.push('/')">
            <div class="logo__title">
              DIGITAL LAWYER
            </div>
          </div>
          <h1 class="modal-window__title title">Авторизация</h1>
          <form class="form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label class="auth-label d-lawyer-label" for="username">Имя пользователя</label>
              <d-lawyer-input
                  type="text"
                  v-model="username"
                  name="username"
                  :class="{ 'is-invalid': submitted && !username }"
                  placeholder="Введите имя пользователя..."
              ></d-lawyer-input>
              <div v-show="submitted && !username" class="invalid-feedback">Введите имя пользователя</div>
            </div>
            <div class="form-group">
              <label class="auth-label d-lawyer-label" for="password">Пароль</label>
              <d-lawyer-input
                  type="password"
                  v-model="password"
                  name="password"
                  placeholder="Введите пароль..."
                  :class="{ 'is-invalid': submitted && !password }"
              ></d-lawyer-input>
              <div v-show="submitted && !password" class="invalid-feedback">Введите пароль</div>
            </div>
            <button class="auth-btn lawyer-btn">Войти</button>

            <p class="btn-subtitle">Нет аккаунта? Зарегистрируйтесь!</p>
            <button class="reg-btn lawyer-btn" @click="$router.push('/registration-of-an-individual')">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
    <lawyer-footer></lawyer-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import LawyerFooter from "../components/UI/LawyerFooter";
import DLawyerNavbar from "../components/UI/DLawyerNavbar";
import DLawyerInput from "../components/UI/DLawyerInput";

export default {
  components: {DLawyerInput, DLawyerNavbar, LawyerFooter},
  data() {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    ...mapState('account', [])
  },
  created() {
    // Сбрасываем статус входа
    this.logout();
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit (e) {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password })
      }
    }
  }
};
</script>

<style scoped>
.modal-window{
  width: 500px;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 40px auto;
}

.logo{
  display: flex;
  justify-content: center;
  padding-top: 50px;
  cursor: pointer;
}

.logo__title{
  margin-left: 5px;
}

.modal-window__title{
  text-align: center;
  padding: 20px 0 45px;
}

.form{
  margin: 0 auto;
  padding: 0 45px;
}

.form-group{
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.auth-label{
  margin: 0 0 6px 7px;
}

.d-lawyer-input {
  width: 410px;
}

.lawyer-btn{
  width: 410px;
}

.auth-btn{
  margin: 20px auto 10px auto;
  background-color: #14BD5B;
}

.auth-btn:hover{
  background-color: #0f8d41;
}

.btn-subtitle{
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
}

</style>