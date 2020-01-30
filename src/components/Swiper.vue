<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <AppStep
        appScreenNumber="1"
        header="Легкость установки"
        desc=" Легко интегрироваться к камере и отметить зоны повышенного контроля"
        subtitle="Пересечение забора, парковочное место, дверь квартиры, сейф, офис и пр.
"
      >
        <img src="../assets/steps/1.jpg" alt="1" /> </AppStep
    ></swiper-slide>
    <swiper-slide>
      <AppStep
        appScreenNumber="1"
        header="Наблюдайте всегда"
        desc="Получать в режиме онлайн оповещение с фото интересующих событий в зоне повышенного контроля"
      >
        <img src="../assets/steps/2.jpg" alt="1"/></AppStep
    ></swiper-slide>
    <swiper-slide>
      <AppStep
        appScreenNumber="1"
        header="Всегда наготове"
        desc=" Вызов полиции или группы быстрого реагирования охраны одним кликом "
        subtitle="Даже и если нужна услуга охраны вне дома, как телохранитель по вызову"
      >
        <img src="../assets/steps/3.jpg" alt="1"/></AppStep
    ></swiper-slide>
    <swiper-slide>
      <AppStep
        appScreenNumber="1"
        header="Проверенные партнеры"
        desc=" Подключить проверенное охранное агентство, которое будет получать сигналы от пользователя "
        subtitle="Агентства тоже регистрируются в приложении"
      >
        <img src="../assets/steps/4.jpg" alt="1"/></AppStep
    ></swiper-slide>
    <swiper-slide>
      <AppStep
        appScreenNumber="1"
        header="Настрой под себя"
        desc=" Легко управлять временем работы системы."
        ч
      >
        <img src="../assets/steps/3.jpg" alt="1"/></AppStep
    ></swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import AppStep from '@/components/AppStep.vue';
export default {
  name: 'carrousel',
  components: {
    AppStep,
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        grabCursor: true,
      },
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 100vh;
}

.slide {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  padding: 2rem;
}
</style>
