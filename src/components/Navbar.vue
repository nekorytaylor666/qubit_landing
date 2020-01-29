<template>
  <nav>
    <i class="fas ham" :class="{ 'fa-bars': !flop, 'fa-times': flop }" @click="flopNavbar"></i>

    <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
      >
      <div class="full-nav" v-if="flop" style="animation-duration: 0.3s">
        <div class="logo">
          <img src="../assets/qubit-logo-min.png" alt="logo" />
          Qubit
        </div>
        <ul>
          <li>
            <a href="#page1">Уалейкум</a>
          </li>
          <li>
            <a href="#page2">Уалейкум</a>
          </li>
          <li>
            <a href="#page3">Уалейкум</a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
function detectmob() {
  if (window.innerWidth <= 800 && window.innerHeight <= 600) {
    return true;
  } else {
    return false;
  }
}
export default {
  data() {
    return {
      flop: true,
    };
  },
  mounted() {
    if (detectmob()) {
      console.log(detectmob());
      this.flop = false;
    }
  },
  methods: {
    flopNavbar() {
      this.flop = !this.flop;
    },
  },
};
</script>

<style lang="scss" scoped>
$break-tablet: 840px;
$break-small: 620px;

a {
  text-decoration: none;
  color: black;
}

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
    font-size: 1.5em;
    font-weight: 800;
    img {
      margin-right: 1rem;
    }
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

  text-align: center;
  li {
    padding-left: 2rem;
    padding-bottom: 1rem;
    cursor: pointer;
  }
}
@media screen and (max-width: $break-small) {
  .full-nav {
    background: white;
    height: auto;
    padding-bottom: 2rem;
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
