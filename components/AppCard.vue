<template>
  <div class="card xl:font-semibold">
    <p class="custom-margin">
      <slot>Texte</slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.custom-margin {
  @media screen and (min-width: 1280px) {
    margin: 55px 75px;
  }

  @media screen and (min-width: 1440px) {
    margin: 105px 150px;
  }
}

.card {
  border-radius: 10px;
  width: 100%;
  line-height: 20px;
  display: block;

  @media screen and (min-width: 1280px) {
    line-height: 48px;
    font-size: 20px;
    max-width: 820px;
    box-shadow: -5px -5px 10px #fff,
      5px 5px 10px rgba($color: #000000, $alpha: 0.16);
  }
}
</style>

