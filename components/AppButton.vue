<template>
  <button :class="classObject">
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  @apply font-semibold border-primary;
  font-size: 18px;
  height: 50px;
  min-width: 233px;
  @media screen and (max-width: 300px) {
    min-width: inherit;
    width: 100%;
  }
  border-radius: 40px;
  box-shadow: -3px -3px 6px #fff,
    3px 3px 6px rgba($color: #000000, $alpha: 0.15);
  &.no-neo {
    box-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 0.15) !important;
  }
}
</style>

<script>
export default {
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject: function () {
      return {
        "bg-primary": !this.outlined && !this.text,
        "bg-white": this.text || this.outlined,
        "text-white": !this.outlined && !this.text,
        "text-primary": this.outlined || this.text,
        border: this.outlined,
        "w-full": this.fullWidth,
      };
    },
  },
};
</script>
