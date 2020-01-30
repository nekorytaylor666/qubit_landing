<template>
  <div class="slideContainer">
    <div class="content">
      <slot></slot>
      <div class="text">
        <h2>{{ header }}</h2>
        <p>{{ desc }}</p>
        <span v-if="subtitle"> {{ subtitle }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
    },
    desc: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
  created() {
    console.log(`../assets/steps/${this.appScreenNumber}.jpg`);
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
}

span {
  font-size: 0.8em;
  color: grey;
}

.slideContainer {
  height: 100vh;
}

.text {
  display: flex;
  padding: 1rem;
  justify-self: center;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
  h2 {
    font-size: 2em;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1.3em;
    padding-bottom: 1rem;
  }
}

img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>
