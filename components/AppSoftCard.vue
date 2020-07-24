<template>
  <div class="card">
    <p class="custom-margin">
      <slot>Texte</slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.custom-margin {
  // margin: 20px 30px;

  // @media screen and (min-width: 1280px) {
  //   margin: 20px 35px;
  // }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  padding: 20px 30px;

  @media screen and (min-width: 1280px) {
    padding: 20px 35px;
  }
  border-radius: 10px;
  width: 100%;
  line-height: 20px;
  display: block;
  box-shadow: -5px -5px 10px #fff,
    3px 3px 20px rgba($color: #000000, $alpha: 0.16);

  @media screen and (min-width: 1280px) {
    margin-right: 65px;
    line-height: 48px;
    font-size: 20px;
    max-width: 260px;
  }
}
</style>

