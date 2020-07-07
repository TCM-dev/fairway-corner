<template>
  <div class="flex flex-row">
    <div :class="style">
      <img src="~assets/svg/social-media/facebook.svg" />
    </div>
    <div :class="style" class="mx-4">
      <img src="~assets/svg/social-media/twitter.svg" />
    </div>
    <div :class="style">
      <img src="~assets/svg/social-media/linkedin.svg" />
    </div>
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
