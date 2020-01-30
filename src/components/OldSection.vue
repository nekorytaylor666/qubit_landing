<template>
  <div class="old section">
    <h2 class="title">Традиционные охранные системы</h2>
    <div class="content">
      <ul>
        <li>
          <div class="expense">
            <span class="expense-title">Сигнализация</span>
            <span class="price">40$ в месяц</span>
          </div>
        </li>
        <li>
          <div class="expense">
            <span class="expense-title">Группы быстрого реагирования</span>
            <span class="price">40$ в месяц</span>
          </div>
        </li>
        <li>
          <div class="expense">
            <span class="expense-title">Охранник</span>
            <span class="price">500$ в месяц</span>
          </div>
        </li>
        <li>
          <div class="expense">
            <span class="expense-title">Камера</span>
            <span class="price">30$ за штуку</span>
          </div>
        </li>
        <li>
          <div class="expense">
            <span class="expense-title">Видео-регистратор</span>
            <span class="price">100$ за штуку</span>
          </div>
        </li>
        <li>
          <div class="expense">
            <span class="expense-title">Процесс</span>
            <span class="price">1000$ за штуку</span>
          </div>
        </li>
      </ul>
    </div>
    <span class="sum">
      Итого:
      <span class="sum-old"><span class="digit">2</span>000$</span>
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
    color: lightcoral;
    font-weight: bold;
  }
}

.digit {
  padding: 0 0.5rem;
}

.content {
  display: flex;
  justify-items: center;
  align-items: center;
  height: 400px;
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
  color: lightcoral;
  font-weight: 800;
  padding: 1rem;
  height: 30px;
  text-align: initial;
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
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: center;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
