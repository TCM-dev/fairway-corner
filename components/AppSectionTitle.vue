<template>
  <h2>
    This is a section title
  </h2>
</template>

<style lang="scss" scoped>
h2 {
  @apply font-bold;
  font-size: 36px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -9px;
    height: 7px;
    width: 97px;
    @apply bg-primary;
  }
}
</style>
