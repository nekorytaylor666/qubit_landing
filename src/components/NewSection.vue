<template>
  <div class="new section">
    <h2>Безопасность с системой I-Guard</h2>
    <div class="content">
      <div class="pros">
        <img src="../assets/vectors/person_camera.svg" alt="camera" />
        <div class="pros-desc">
          <h2 class="pros-title">Подключение IP-камер</h2>
          <div class="price-container">
            <h3 class="price">
              30$ за камеру
            </h3>
            <span>*соответствующие условиям</span>
          </div>
        </div>
      </div>
      <div class="pros">
        <img src="../assets/vectors/mobile_unlock.svg" alt="" />
        <div class="pros-desc">
          <h2 class="pros-title">Мобильное приложение</h2>
          <div class="price-container">
            <h3 class="price">
              8$ в месяц
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.price-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.price {
  background: green;
  padding: 1rem;
  border-radius: 15px;
}

.pros-desc {
  height: 200px;
}

.pros-title {
  padding: 1rem;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 600px;
}

.pros {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  img {
    height: 300px;
  }
}

.new {
  color: white;

  background: linear-gradient(-30deg, #0519be 0%, #72bffe 100%);
}
</style>
