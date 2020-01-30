<template>
  <div class="container">
    <div class="header">
      <div class="image">
        <img
          id="watch"
          src="../assets/vectors/mobile_unlock.svg"
          alt="iguard"
        />
        <h1>I-Guard</h1>
        <h2>ВИДЕОНАБЛЮДЕНИЕ НОВОГО ПОКОЛЕНИЯ</h2>
      </div>
      <div class="text">
        <h1>Умная сигнализация</h1>
        <ul class="pros">
          <li class="pros-statement">
            <i class="fas fa-door-closed ham"></i>
            <div class="pros-text">
              <p>
                Умный охранник в мобильном приложении оповестит о движении
                человека близ двери
              </p>
            </div>
          </li>
          <li class="pros-statement">
            <i class="fab fa-uber"></i>
            <div class="pros-text">
              <p>Вызов охраны одним кликом как в UBER</p>
            </div>
          </li>
          <li class="pros-statement">
            <i class="fas fa-microphone-alt"></i>
            <div class="pros-text">
              <p>
                позволит Вам поговорить голосом с «Гостем» (через микрофон в
                камере)
              </p>
            </div>
          </li>
          <li class="pros-statement">
            <i class="fas fa-volume-up"></i>
            <div class="pros-text">
              <p>
                Звуковое оповещение имени «Гостя», если его лицо есть в базе
                данных
              </p>
            </div>
          </li>
        </ul>
        <img class="dots" src="../assets/dots.png" alt="dots" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
li {
  display: flex;
  align-items: center;
  i {
    font-size: 1.6em;
  }
  .fa-uber {
    font-size: 2em;
  }
  .fa-microphone-alt {
    font-size: 2em;
  }
  .fa-volume-up {
    font-size: 1.3em;
  }
  .pros-text {
    margin-left: 1rem;
  }
}

.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 4em;
    background: -webkit-linear-gradient(180deg, #0519be, #72bffe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h2 {
    text-align: center;
  }
}

ul {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 1rem;
}

.header {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    height: 400px;
    object-fit: cover;
  }
}
.text {
  position: relative;
  text-align: justify;
  padding: 1rem;
  padding-right: 2rem;
}

p {
  font-size: 1.25em;
}
h1 {
  text-align: justify;
  font-size: 2.5em;
  font-weight: 800;
}

.dots {
  width: 300px;
  object-fit: cover;
  position: absolute;
  left: -150px;
  top: -100px;
  opacity: 0.1;
  z-index: 1;
}
@media only screen and (max-device-width: 480px) {
  /* Styles */
  .image {
    img {
      width: auto;

      height: 150px;
    }
  }
}
/* #watch {
  margin: 0 auto;
  width: 80%;
  object-fit: cover;
  z-index: 20;
}

#wave {
  position: relative;
  top: -180px;
}

.header {
  grid-gap: 2rem;
  background: white;
  width: 100%;
  height: 70%;
  align-items: center;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}
p {
  font-size: 1.25em;
}
h1 {
  margin: 0;
  padding: 1rem;
  padding-left: 0;
  font-size: 4em;
  font-weight: 800;
}
.text {
  background-color: white;
  border-radius: 20px;
  padding: 1rem;
  position: relative;
  width: 80%;
  text-align: justify;
}
.wave {
  position: relative;
  .dots {
    top: 0;
    right: 0;
    z-index: 20;
  }
}

.container {
  z-index: 1;
  background: #f2f2f2;
  position: relative;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  overflow: hidden;
}

.cta {
  position: relative;
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  border: solid 2px blue;
  background: none;
  border-radius: 10px;
  z-index: 10;
  transition: 0.3s;
  cursor: pointer;
}

.cta:hover {
  background: blue;
  color: white;
} */
</style>
