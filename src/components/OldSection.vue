<template>
  <div class="old section">
    <h2 class="title">Безопасность с традиционными охранными системами</h2>
    <div class="content">
      <div class="expenses">
        <h3 class="subtitle">Охранное агенство</h3>
        <div class="expenses-group">
          <ul class="expenses-list">
            <li class="expense">
              <div class="price">
                <span>40$ в месяц</span>
              </div>
              <h4 class="expenses-title">Сигнализация и группа быстрого реагирования</h4>
            </li>
            <li class="expense">
              <div class="price">
                <span>500$ в месяц</span>
              </div>
              <h4 class="expense-title">Охранник</h4>
            </li>
          </ul>
        </div>
      </div>
      <div class="expenses">
        <h3 class="subtitle">Видеонаблюдения</h3>
        <div class="expenses-group">
          <ul class="expenses-list">
            <li class="expense">
              <div class="price">
                <span>30$ в месяц</span>
              </div>
              <h4 class="expenses-title">Камера</h4>
            </li>
            <li class="expense">
              <div class="price">
                <span>100$ в месяц</span>
              </div>
              <h4 class="expense-title">Видео-регистратор</h4>
            </li>
            <li class="expense">
              <div class="price">
                <span>1000$ в месяц</span>
              </div>
              <h4 class="expense-title">Процессор</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  height: 600px;
}
.title {
  text-align: center;
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
  background-color: #e53935;
  border-radius: 15px;
  color: white;
  font-weight: 800;
  padding: 1rem;
  width: 130px;
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
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
