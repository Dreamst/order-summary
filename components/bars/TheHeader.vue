<template>
  <div>
    <header class="header">
      <div class="header__figure">
        <img class="header__img" src="img/logo_ours_noel.svg" alt="Tediber" >
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style lang="scss" scoped>
  .header {
    max-height: 60px;
    height: 100%;
    display: flex;
    place-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    &__figure {
      

    }

    &__img {


    }
  }
</style>