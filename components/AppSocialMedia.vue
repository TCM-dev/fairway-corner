<template>
  <div class="flex flex-row">
    <a href="#" :class="style">
      <img src="~assets/svg/social-media/facebook.svg" />
    </a>
    <a href="#" :class="style" class="mx-4">
      <img src="~assets/svg/social-media/twitter.svg" />
    </a>
    <a href="#" :class="style">
      <img src="~assets/svg/social-media/linkedin.svg" />
    </a>
  </div>
</template>

<style scoped>
.size {
  height: 41px;
  width: 41px;
}
</style>

<script>
export default {
  computed: {
    style() {
      return "bg-white rounded-full flex items-center justify-center size";
    }
  }
};
</script>
