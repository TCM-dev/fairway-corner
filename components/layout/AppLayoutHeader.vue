<template>
  <div>
    <header
      class="w-full bg-primary flex justify-between items-center fixed top-0 left-0"
    >
      <div class="logo-size">
        <div class="logo-inner-size" />
      </div>
      <nav>
        <nuxt-link :to="localePath('index')" :class="style">Homepage</nuxt-link>
        <nuxt-link :to="localePath('components')" :class="style">Components</nuxt-link>
        <nuxt-link to="" :class="style">Offer</nuxt-link>
        <nuxt-link to="" :class="style">Company</nuxt-link>
        <nuxt-link to="" :class="style">Login</nuxt-link>
        <nuxt-link to="" :class="style">Demo</nuxt-link>
        <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
          English
        </nuxt-link>

        <nuxt-link v-if="$i18n.locale !== 'fr'" :to="switchLocalePath('fr')">
          Français
        </nuxt-link>
      </nav>
    </header>
    <div class="header" />
  </div>
</template>

<style lang="scss" scoped>
header,
.header {
  height: 119px;
  padding: 0 150px;
}

.logo-size {
  height: 36px;
  min-width: 36px;
  border: solid 3px white;
  transform: rotate(-135deg);
}

.logo-size:hover .logo-inner-size {
  height: 30px;
  width: 30px;
  transition: 125ms ease-in;
}

.logo-inner-size {
  height: 17px;
  width: 17px;
  background-color: white;
  transition: 155ms ease-out;
}

.margin {
  margin: 0 30px;
}

.nuxt-link-exact-active {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 23px;
    background: white;
    bottom: -5.5px;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>

<script>
export default {
  computed: {
    style() {
      return "font-semibold text-white margin";
    }
  }
};
</script>
