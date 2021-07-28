<!-- Страница список продавцов -->
<template>
  <div>
    <d-lawyer-navbar></d-lawyer-navbar>
    <div class="list-of-sellers-body">
      <div class="container">
        <div class="list-of-sellers-body__container-top">
          <h1 class="container-top__title title">Список продавцов</h1>
          <div class="sort-by-name-box">
            <h4 class="sort-by-name-box__title">Название компании</h4>
            <div class="sort-by-name-box__search-box">
              <input class="search-box__input" type="text" placeholder="Введите название компании" v-model="title">
              <!--            <button class="search-box__btn">искать</button>-->
            </div>
          </div>
        </div>


        <div class="list-of-sellers-body__list">
          <div class="sellers-container" v-for="listOfSeller in searchCompany">
            <div class="sellers-container__box-img">
              <img class="box-img__logo" :src="listOfSeller.logo">
            </div>

            <div class="sellers-container__text-box">
              <div class="text-box__top">

                <div class="top__container-title">
                  <div class="store-box">
                    <img class="store-box__img" :src="listOfSeller.storeImg" alt="">
                    <p class="store-box__text">{{listOfSeller.storeText}}</p>
                  </div>
                  <h4 class="container-title__title">{{ listOfSeller.title }}</h4>
                </div>

                <div class="text-box__review">
                  <div class="review__stars">
                    <img class="star__img" :src="listOfSeller.starImg1" alt="">
                    <img class="star__img" :src="listOfSeller.starImg2" alt="">
                    <img class="star__img" :src="listOfSeller.starImg3" alt="">
                    <img class="star__img" :src="listOfSeller.starImg4" alt="">
                    <img class="star__img" :src="listOfSeller.starImg5" alt="">
                  </div>
                  <p class="stars__text">{{ listOfSeller.starText }}</p>
                </div>
                <button class="top__btn lawyer-btn" @click="$router.push('/list-of-seller-bids')">Заявка на возврат товара</button>
              </div>

              <p class="text-box__director-name">{{ listOfSeller.director }}</p>
              <p class="text-box__address">{{ listOfSeller.address }}</p>
              <p class="text-box__innAndOrnip">{{ listOfSeller.innAndOrnip }}</p>
              <a class="text-box__link-company" :href="listOfSeller.link">{{ listOfSeller.link }}</a>
            </div>
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

export default {
  components: {
    LawyerFooter,
    DLawyerNavbar
  },
  data() {
    return {
      title: '',
      listOfSellers: [
        {id: 1, logo: require("../assets/images/listOfSellers-logo--1.png"), storeImg: require("../assets/images/clothing-store-img.svg"), storeText: 'Магазин одежды', title: '«Империя сумок»', starImg1: require('../assets/images/star-inactive.svg'), starImg2: require('../assets/images/star-inactive.svg'), starImg3: require('../assets/images/star-inactive.svg'), starImg4: require('../assets/images/star-inactive.svg'), starImg5: require('../assets/images/star-inactive.svg'), starText: 'нет отзывов',director: 'ИП Шалгунова Нина Максимовна', address: 'Самарская область, г. Самара, ул. Владимирская, д. 48, кв. 170', innAndOrnip: 'ИНН 631102363096  ОРНИП 317631300129304', link: 'www.imperiasumok.ru'},
        {id: 2, logo: require("../assets/images/listOfSellers-logo--2.png"), storeImg: require("../assets/images/clothing-store-img.svg"), storeText: 'Магазин одежды', title: 'black_gang_brooks', starImg1: require('../assets/images/star-active.svg'), starImg2: require('../assets/images/star-active.svg'), starImg3: require('../assets/images/star-active.svg'), starImg4: require('../assets/images/star-inactive.svg'), starImg5: require('../assets/images/star-inactive.svg'), starText: '5 отзывов', director: 'ИП Брукс Саша Александровна ', address: 'Республика Башкортостан, Кармаскалинский район, с. Кармаскалы, ул. 50 лет Победы, д. 44, кв. 21', innAndOrnip: 'ИНН 022904211925  ОГРНИП 319028000127441', link: '@black_gang_brooks'},
        {id: 3, logo: require("../assets/images/listOfSellers-logo--3.png"), storeImg: require("../assets/images/electronic-store-img.svg"), storeText: 'Магазин техники', title: 'ООО «АС»', starImg1: require('../assets/images/star-active.svg'), starImg2: require('../assets/images/star-active.svg'), starImg3: require('../assets/images/star-active.svg'), starImg4: require('../assets/images/star-active.svg'), starImg5: require('../assets/images/star-semi-active.svg'), starText: '124 отзыва', director: 'Руководитель: Сидоров Андрей Александрович', address: 'Республика Башкортостан, г. Уфа, ул. Первомайская, д. 86', innAndOrnip: 'ИНН 0273085645  ОГРН 1120280003293', link: 'www.xiaomiufa.ru'},
        {id: 4, logo: require("../assets/images/listOfSellers-logo--4.png"), storeImg: require("../assets/images/jewerely-store.svg"), storeText: 'Ювелирный магазин', title: 'ES Jewelry', starImg1: require('../assets/images/star-active.svg'), starImg2: require('../assets/images/star-active.svg'), starImg3: require('../assets/images/star-active.svg'), starImg4: require('../assets/images/star-active.svg'), starImg5: require('../assets/images/star-inactive.svg'), starText: '4 отзыва', director: 'Шайхмансурова Эмма Асыльяновна', address: 'Республика Башкортостан, г. Уфа, ул. Интернациональная, д. 56', innAndOrnip: 'ИНН 026905074475', link: '@es.collection_jw'}
      ],
    }
  },
  computed: {
    searchCompany: function () {
      let company = this.title;
      return this.listOfSellers.filter(function (elem) {
        if (company === '') return true;
        else return elem.title.indexOf(company) > -1;
      });
    }
  }
}
</script>

<style scoped>
.list-of-sellers-body__container-top{
  display: flex;
  margin-top: 47px;
}

.container-top__title{
  margin: 30px 53px 70px 0;
}

/* Стили поиска сортировки -- НАЧАЛО */
.sort-by-name-box{
  width: 432px;
  height: 80px;
  background-color: #D5FFE0;
  padding: 10px;
}

.sort-by-name-box__title{
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.search-box__input{
  width: 413px;
  font-size: 18px;
  padding: 5px;
}

.search-box__btn{
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #14BD5B;
  width: 122px;
  height: 38px;
  border-radius: 4px;
  margin: 0 0 10px 10px;
  border: 0;
  outline: none;
  cursor: pointer;
}
/* Стили поиска сортировки -- КОНЕЦ */

.sellers-container__box-img{
  margin-top: 25px;
  width: 155px;
}

.list-of-sellers-body__list{
  display: block;
  margin: 0 auto 25px 0;
}

.list-of-sellers-body__list:last-child{
  display: block;
  margin: 0 auto 140px auto;
}

.sellers-container{
  display: flex;
  width: 1000px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(34, 34, 34, 0.5);
  padding-bottom: 25px;
}

.sellers-container__text-box{
  margin-left: 20px;
}

.lawyer-btn{
  width: 261px;
}

.text-box__top{
  display: flex;
}

.store-box{
  display: flex;
  margin: 20px 0 0 20px;
}

.store-box__text{
  font-size: 16px;
  font-weight: 600;
  color: #808080;
  margin: 5px 0 0 7px;
}

.container-title__title{
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1px;
  width: 245px;
  margin: 4px 0 11px 20px;
}

.text-box__review{
  display: flex;
  width: 170px;
  margin: 60px 35px 0 80px;
}

.review__stars{
  margin-right: 11px;
}

.stars__text{
  font-size: 12px;
  color: #CCCCCC;
  margin-top: 2px;
}

.top__btn{
  margin-top: 49px;
}

.text-box__director-name{
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 5px 20px;
}

.text-box__address{
  font-size: 16px;
  font-weight: 400;
  color: #808080;
  margin: 0 0 5px 20px;
}

.text-box__innAndOrnip{
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #808080;
  margin: 0 0 15px 20px;
}

.text-box__link-company{
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #808080;
  text-decoration: none;
  margin: 0 0 25px 20px;
}
</style>