<!-- Страница "личного кабинета пользователя" -->
<template>
  <div>
    <d-lawyer-navbar></d-lawyer-navbar>
    <div>
      <div class="container">
        <div class="personal-area-top-container">
          <h1 class="personal-area-top-title title">Личный кабинет</h1>
          <div class="personal-area-container-btn">
            <reg-btn>Входящие</reg-btn>
            <reg-btn>Мои претензии</reg-btn>
          </div>
        </div>
        <h2 class="personal-area__title">Здравствуйте, {{account.user.firstName}}!</h2> <!--  -->
      </div>
    </div>
    <lawyer-footer></lawyer-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import DLawyerNavbar from "../components/UI/DLawyerNavbar";
import LawyerFooter from "../components/UI/LawyerFooter";
import RegBtn from "../components/UI/RegBtn";

export default {
  components: {RegBtn, LawyerFooter, DLawyerNavbar},
  computed: {
    ...mapState({
      account: state => state.account,
      users: state => state.users.all
    })
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    ...mapActions('users', {
      getAllUsers: 'getAll',
      deleteUser: 'delete'
    })
  }
}
</script>

<style scoped>

</style>