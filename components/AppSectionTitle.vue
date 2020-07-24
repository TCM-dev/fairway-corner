<template>
  <h2>
    <slot>This is a section title</slot>
  </h2>
</template>

<style lang="scss" scoped>
h2 {
  @apply font-bold;
  font-size: 20px;
  position: relative;

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }

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
