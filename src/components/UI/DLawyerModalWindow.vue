<template>
  <div>
    <div class="d-lawyer-modal-container">
      <div class="d-lawyer-modal-window">
        <div class="d-lawyer-modal-window__content">
          <div class="content__top-box">
            <h4 class="top-box__title">Авторизация</h4>
            <button class="top-box__img-link" @click="close"><img class="top-box__cancel-img"
                                                                           src="@/assets/images/cancel-img.svg"
                                                                           alt="cancel" width="20" height="20"></button>
          </div>

          <form class="content__form">
            <slot>
              <label class="form__label d-lawyer-label" for="email">Э/почта</label>
              <d-lawyer-input id="email" type="email" placeholder="Введите свою почту..."
                              v-model="email"></d-lawyer-input>

              <label class="form__label d-lawyer-label" for="password">Пароль</label>
              <d-lawyer-input id="password" type="password" placeholder="Введите пароль..."
                              v-model="password"></d-lawyer-input>
            </slot>
          </form>
          <button class="lawyer-btn" type="submit">войти</button>
          <div class="reset">
            <a class="reset-link" href="#">Сброс пароля</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DLawyerInput from "./DLawyerInput";


export default {
  name: 'd-lawyer-modal-window',

  components: {DLawyerInput},
  props: {

  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.d-lawyer-modal-window {
  width: 300px;
  height: 393px;
  border-radius: 10px;
  right: 135px;
  top: 73px;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.d-lawyer-modal-window__content {
  padding: 25px 24px 24px 24px;
}

.content__top-box {
  display: flex;
}

.top-box__title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
}

.top-box__img-link {
  position: absolute;
  right: 22px;
  top: 24px;
  cursor: pointer;
  background: inherit;
  border: none;
  transition: all .4s;
}

.top-box__img-link:hover {
  transform: scale(1.3);
}

.content__form {
  display: flex;
  flex-direction: column;
}

.d-lawyer-input {
  width: 250px;
}

.form__label {
  margin: 0 0 8px 8px;
}

#email {
  margin-bottom: 15px;
}

#password {
  margin-bottom: 70px;
}

.lawyer-btn {
  width: 250px;
  margin: 0 auto;
}

.reset {
  margin-top: 20px;
  text-align: center;
}

.reset-link {
  font-size: 16px;
  font-weight: 600;
  color: #006ECF;
  text-decoration: none;
}

.reset-link:hover {
  text-decoration: underline;
}
</style>