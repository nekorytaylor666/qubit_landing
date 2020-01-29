<template>
  <div id="app">
    <Navbar></Navbar>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section fp-auto-height-responsive">
        <div class="content">
          <Header></Header>
        </div>
      </div>
      <div class="section">
        <div class="content" id="test">
          <Slide1></Slide1>
        </div>
      </div>
      <div class="section">
        <div class="content">
          <Slide2></Slide2>
        </div>
      </div>
      <div class="section">
        <div class="content">
          <OurClients></OurClients>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Slide1 from '@/components/Slide1.vue';
import Slide2 from '@/components/Slide2.vue';
import OurClients from '@/components/OurClients.vue';

export default {
  components: {
    Navbar,
    Header,
    Slide1,
    Slide2,
    OurClients,
  },
  data() {
    return {
      options: {
        menu: '#menu',
        lockAnchors: false,
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        anchors: ['page1', 'page2', 'page3'],
        verticalCentered: false,
        scrollHorizontally: true,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {
          type: 'reveal',
          percentage: 62,
          property: 'translate',
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import 'normalize-scss';
@include normalize();
body {
  font-family: 'Montserrat', sans-serif;
}
* {
  padding: 0;
  margin: 0;
}
#test {
  z-index: 20;
}

ul {
  list-style: none;
}
</style>
