<template>
  <div>
    <app-layout-header />
    <Nuxt />
    <!-- <div>
    </div> -->
    <footer>
      Salut, je suis un footer, trop bien.
    </footer>
  </div>
</template>

<style>
html {
  font-size: 14px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
}

body {
  background: #f1f3f6;
}

.custom-container {
  padding: 45px 45px;

  @media screen and (min-width: 1280px) {
    padding: 55px 150px;
  }
}
</style>
