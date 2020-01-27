<template>
  <div id="app">
    <Navbar></Navbar>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <div class="content">hello</div>
      </div>
      <div class="section">
        <div class="content">hello</div>
      </div>
      <div class="section">
        <div class="content">hello</div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
      },
    };
  },
};
</script>

<style lang="scss">
@import 'normalize-scss';
@include normalize();
full-page {
  height: 300px;
}
body {
  font-family: 'Open Sans', sans-serif;
}

.section {
  .content {
    padding-top: 4rem;
  }
}
</style>
