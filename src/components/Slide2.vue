<template>
  <div class="slide">
    <div class="image">
      <img src="../assets/vectors/village.svg" alt="village" />
    </div>
    <div class="text">
      <div class="dots">
        <img src="../assets/dots2.png" alt="dots" />
      </div>
      <h2>Удобно</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        temporibus dignissimos voluptatem in hic, dolorum dolores veritatis
        ad quae ut repellendus impedit aliquam consectetur nihil assumenda
        eligendi minima rem earum?
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.slide {
  padding: 2rem;
  background: white;
  display: grid;
  height: 85vh;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-column-gap: 2rem;
  justify-items: center;
  align-items: center;
}
.image {
  width: 80%;
  img {
    grid-column: 2;
    object-fit: cover;
    width: 100%;
  }
}

h2 {
  margin: 0;
  padding: 1rem;
  font-size: 4em;
  font-weight: 800;
}
.text {
  position: relative;
  width: 100%;
  text-align: justify;
  p {
    width: 80%;
    padding: 1rem;
    font-size: 1.25em;
  }
}

.dots {
  position: relative;
  img {
    position: absolute;
    top: -100px;
    left: -200px;
    width: 300px;
    opacity: 0.3;
    object-fit: cover;
  }
}
</style>
