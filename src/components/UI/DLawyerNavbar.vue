<template>
  <div class="navbar">
    <slot>
      <div class="container">
        <div class="navbar-inner">
          <div class="logo" @click="$router.push('/')">
            <img src="@/assets/images/logo.svg" alt="" class="logo__img" width="34" height="30" @click="$router.push('/')">
            <div class="logo__title">
              DIGITAL LAWYER
            </div>
          </div>
          <nav class="nav-top">
              <ul class="nav-top__list">
                <li class="list__item"><a class="item__link" @click="$router.push('/')">О сервисе</a></li>
                <li class="list__item"><a class="item__link" @click="$router.push('/list-of-sellers')">Продавцы и бренды</a></li>
                <li class="list__item"><a class="item__link" @click="$router.push('/tariffs')">Тарифы</a></li>
                <li class="list__item"><a class="item__link" @click="showModal">Вход</a></li>
              </ul>
          </nav>
        </div>
        <!-- Диалоговое окно авторизации-->
        <d-lawyer-modal-window
            v-show="isModalVisible"
            @close="closeModal"
        ></d-lawyer-modal-window>
      </div>
    </slot>
  </div>

</template>

<script>
import DLawyerInput from "./DLawyerInput";
import DLawyerModalWindow from "./DLawyerModalWindow";

export default {
  components: {
    DLawyerModalWindow,
    DLawyerInput,
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>

<style scoped>
.navbar{
  height: 80px;
  background-color: #F0F0F0;
}

.navbar-inner{
  border-radius: 20px;
  background-color: #fff;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}

.logo{
  cursor: pointer;
  display: flex;
}

.logo__img{
  margin: 14px 0 16px 82px;
}

.logo__title{
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 18px;
  margin: 19px 0 22px 14px;
}

.navbar{
  height: 85px;
  display: flex;
  justify-content: flex-end;
}

.nav-top{
  margin: 20px 0 24px;
}

.nav-top__list{
  display: flex;
  list-style: none;
}

.list__item{
  margin-right: 40px;
}

.list__item:last-child{
  margin-left: 140px;
}

.item__link{
  transition: all .4s;
}

.item__link:hover{
  color: #222222;
}

/* Модальное окно -- НАЧАЛО */


/* Модальное окно -- КОНЕЦ */
</style>