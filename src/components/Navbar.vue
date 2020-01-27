<template>
  <nav>
    <i class="fas ham" :class="{ 'fa-bars': !flop, 'fa-times': flop }" @click="flopNavbar"></i>

    <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
      >
      <div class="full-nav" v-if="flop" style="animation-duration: 0.3s">
        <div class="logo">
          <img src="../assets/test-logo.png" alt="logo" />
          I-guard
        </div>
        <ul>
          <li>О нас</li>
          <li>Уалейкум</li>
          <li>О нас</li>
          <li>Уалейкум</li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      flop: true,
    };
  },
  methods: {
    flopNavbar() {
      console.log(!this.flop);
      this.flop = !this.flop;
    },
  },
};
</script>

<style lang="scss" scoped>
$break-tablet: 840px;
$break-small: 620px;
i {
  display: none;
  position: fixed;
  right: 1rem;
  top: 1rem;
  font-size: 1.5em;
  cursor: pointer;
  z-index: 40;
  @media screen and (max-width: $break-tablet) {
    display: block;
  }
}

.full-nav {
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 4rem;
  background: white;
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .logo {
    padding-left: 4rem;
    height: 4rem;
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 1rem;
  }
}
img {
  height: 80%;
}
ul {
  grid-column: 3;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 4rem;
  flex-wrap: wrap;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  text-align: center;
  li {
    cursor: pointer;
  }
}
@media screen and (max-width: $break-small) {
  .full-nav {
    height: auto;
  }
  ul {
    width: 100%;
    li {
      width: 100%;
    }
  }

  .logo {
    width: 100%;
    text-align: center;
  }
}
</style>


