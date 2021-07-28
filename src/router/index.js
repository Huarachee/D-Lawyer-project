import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from "vuex";

import Main from "../pages/Main";
import ListOfSellers from "../pages/ListOfSellers";
import Tariffs from "../pages/Tariffs";
import RegIndividualEntrepr from "../pages/RegIndividualEntrepr";
import RegIndividual from "../pages/RegIndividual";
import LoginPage from "../pages/LoginPage";
import BuyersOrderList from "../pages/BuyersOrderList";
import PersonalArea from "../pages/PersonalArea";

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes: [
      {
          path: '/', // Главная или домашняя страница, появляется по умолчанию
          name: 'Main',
          component: Main
      },
      {
          path: '/login', // Перенаправляет на страницу авторизации пользователя
          name: 'LoginPage',
          component: LoginPage
      },
      {
          path: '/list-of-sellers', // Перенаправляет на страницу "Список продавцов"
          name: 'ListOfSellers',
          component: ListOfSellers
      },
      {
          path: '/tariffs', // Перенаправляет на страницу "Тарифы"
          name: 'Tariffs',
          component: Tariffs
      },
      {
          path: '/registration-of-an-individual-entrepreneur', // Перенаправляет на страницу "регистрация индивидуального предпринимателя"
          name: 'RegIndividualEntrepr',
          component: RegIndividualEntrepr
      },
      {
          path: '/registration-of-an-individual', // Перенаправляет на страницу "Регистрация физического лица"
          name: 'RegIndividual',
          component: RegIndividual
      },
      {
          path: '/buyers-order-list', // Перенаправляет на страницу "список заявок покупателя"
          name: 'BuyersOrderList',
          component: BuyersOrderList
      },
      {
          path: '/personal-area', // Перенаправляет на страницу "Личный кабинет"
          name: 'PersonalArea',
          component: PersonalArea
      },
      {
          path: '*', // Если ничего из предложенного не совпадает, то возвращается на главную страницу
          redirect: '/'
      }
  ]
});

// Если неавторизованный пользователь пытается перейти на страницу с ограниченным доступом, то его перенаправляют залогиниться
// router.beforeEach((to, from, next) => {
//     const publicPages = ['/login', '/register'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
//
//     if (authRequired && !loggedIn) {
//         return next('/login');
//     }
//
//     next();
// });

export default router
