<template>
  <div class="clients">
    <h2>Наши партнеры</h2>
    <ul class="clients-list">
      <li>
        <div class="client">
          <div class="text">
            <h3>Bi group</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quidem odio incidunt repudiandae voluptates? Deserunt repudiandae repellat veniam, odit incidunt dolor tenetur voluptate animi minima dolores, sit quasi esse velit.</p>
          </div>
          <div class="logo">
            <img src="../assets/ah-logo.png" alt class />
          </div>
        </div>
      </li>
      <li>
        <div class="client">
          <div class="text">
            <h3>Bi group</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quidem odio incidunt repudiandae voluptates? Deserunt repudiandae repellat veniam, odit incidunt dolor tenetur voluptate animi minima dolores, sit quasi esse velit.</p>
          </div>
          <div class="logo">
            <img src="../assets/hik-logo.png" alt class />
          </div>
        </div>
      </li>
      <li>
        <div class="client">
          <div class="text">
            <h3>Bi group</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quidem odio incidunt repudiandae voluptates? Deserunt repudiandae repellat veniam, odit incidunt dolor tenetur voluptate animi minima dolores, sit quasi esse velit.</p>
          </div>
          <div class="logo">
            <img src="../assets/bi-logo.png" alt class />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

h2 {
  margin: 0;
  padding: 1rem;
  font-size: 3em;
  font-weight: 800;
}

h3 {
  font-size: 2rem;
}
.clients {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.clients-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  width: 100%;
  .client {
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 1rem;
  }
}

.client {
  .text {
    text-align: center;
    p {
      text-align: justify;
      padding: 1rem;
    }
  }

  .logo {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      width: 70%;
    }
  }
}
</style>