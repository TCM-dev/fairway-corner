<template>
  <div>
    <app-layout-header />
    <div class="go-back">
      Revenir en <button @click="goBack">arrière</button>
    </div>
    <Nuxt />
    <!-- <div>
    </div> -->
    <app-footer />
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

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

.go-back {
  padding: 2em;
  font-size: 20px;
}

.go-back button {
  color: #999;
  font-weight: bold;
}
</style>
