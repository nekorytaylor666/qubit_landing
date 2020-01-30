<template>
  <div class="new section">
    <h2 class="title">I-Guard</h2>
    <div class="content">
      <ul>
        <li>
          <div class="expense">
            <span class="expense-title">Камера</span>
            <span class="price">30$ за штуку</span>
          </div>
        </li>
        <li>
          <div class="expense">
            <span class="expense-title">Мобильное приложение</span>
            <span class="price">8$ в месяц</span>
          </div>
        </li>
      </ul>
    </div>
    <span class="sum">
      Итого:
      <span class="sum-old">200$</span>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sum {
  font-size: 2rem;
  .sum-old {
    color: lightgreen;
    font-weight: bold;
  }
}

.content {
  display: flex;
  justify-items: center;
  height: 400px;
  align-items: center;
}
.title {
  text-align: center;
  height: 80px;
  max-width: 500px;
  display: flex;

  align-items: center;
}
.expenses-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 450px;
  background-color: #f2f2f2;
  border-radius: 20px;
}

.subtitle {
  text-align: center;
  padding: 1rem;
}

.price {
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightgreen;
  font-weight: 800;
  padding: 1rem;
  height: 30px;
  text-align: center;
}

.expenses-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 90%;
}

.expense {
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 50% 50%;
  font-size: 1.5em;
}

.expense-title {
  max-width: 200px;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.new {
  color: white;

  background: linear-gradient(-30deg, #0519be 0%, #72bffe 100%);
}

@media only screen and (max-device-width: 480px) {
  /* Styles */

  .expense {
    font-size: 1.3em;
  }
}
</style>

