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
        anchors: ['aboutus', 'versus', 'slides'],
        verticalCentered: false,
        lazyLoading: true,
        //Accessibility
        keyboardScrolling: true,
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
  font-size: 16px;
}

@media only screen and (max-device-width: 480px) {
  /* Styles */
  body {
    font-size: 11px;
  }
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
