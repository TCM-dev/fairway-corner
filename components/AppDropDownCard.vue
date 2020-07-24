<template>
  <div class="dp-card">
    <p class="custom-margin">
      <slot>Texte</slot>
    </p>
    <button class="mb-2 xl:mb-0">
      See more
      <img src="~assets/svg/icons/chevron-bottom.svg" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.custom-margin {
  margin: 16px;
  @media screen and (min-width: 1280px) {
    margin: 40px 50px;
  }
}

.dp-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;

  @media screen and (min-width: 1280px) {
    border-radius: 10px;
    line-height: 48px;
    font-size: 20px;
    max-width: 820px;
    box-shadow: 10px 10px 15px rgba($color: #000000, $alpha: 0.16);
  }
}

button {
  margin-left: auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #919191;
  font-size: 12px;
  font-weight: 700;

  img {
    margin-left: 0.5em;
  }
}
</style>

