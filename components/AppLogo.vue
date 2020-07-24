<template>
  <div>
    <div v-if="!white">
      <img src="~assets/svg/logo-color.svg" />
    </div>
    <div v-if="white">
      <img src="~assets/svg/logo-white.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: false
    }
  }
};
</script>
