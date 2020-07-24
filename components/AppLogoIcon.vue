<template>
  <div>
    <div v-if="!white">
      <img src="~assets/svg/logo-icon-color.svg" />
    </div>
    <div v-if="white">
      <img src="~assets/svg/logo-icon-white.svg" />
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
