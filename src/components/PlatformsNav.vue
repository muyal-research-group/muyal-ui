<template>
    <div class="flex flex-direction--column align-items--center pa--xl">
    <div class="pa--xl front-page__platforms-container">
      <router-link to = "/nez">
        <div class="front-page__platform front-page__platform--nez">
          <img src="../assets/nez.png" alt="NEZ">
        </div>
      </router-link>
      <router-link to = "/chimalli">
        <div class="front-page__platform front-page__platform--chimalli">
            <img src="../assets/chimalli.png" alt="CHIMALLI">
        </div>
      </router-link>
      <router-link to = "/painal">
        <div class="front-page__platform front-page__platform--painal">
            <img src="../assets/painal.png" alt="PAINAL">
        </div>
      </router-link>
      <router-link to = "/xelhua">
        <div class="front-page__platform front-page__platform--xelhua">
            <img src="../assets/xelhua.png" alt="XELHUA">
        </div>
      </router-link>
      <router-link to = "/alwa">
        <div class="front-page__platform front-page__platform--alwa">
            <img src="../assets/alwa.png" alt="ALWA">
        </div>
      </router-link>
    </div>
        <p>Clic para ver mas información</p>
    </div>
</template>

<style scoped>
.front-page__platforms-container{
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: red; */
  /* padding: 10; */
}
.front-page__platform {
  background: white;
  --size: 200px;
  width: var(--size);
  height: var(--size);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}
.front-page__platform:hover {
  cursor: pointer;
    transform: scale(1.1);
    transition: transform ease-in 300ms;
}
.front-page__platform img{
 width: 150px;
 min-width: 60px;
}
</style>