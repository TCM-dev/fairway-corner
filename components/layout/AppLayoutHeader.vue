<template>
  <div>
    <header
      class="desktop-header w-full bg-primary hidden xl:flex justify-between items-center fixed top-0 left-0 z-50"
    >
      <nuxt-link :to="localePath('index')" class="logo-size">
        <div class="logo-inner-size" />
      </nuxt-link>
      <nav>
        <nuxt-link :to="localePath('index')" :class="style">
          Homepage
        </nuxt-link>
        <nuxt-link :to="localePath('components')" :class="style">
          Components
        </nuxt-link>
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
    <header
      class="mobile-header w-full flex xl:hidden fixed bottom-0 justify-center items-end z-50"
    >
      <button @click="enabled = true" class="mb-4">
        <app-logo-icon class="logo-mobile-size" />
      </button>
    </header>
    <div class="hidden xl:block header" />
    <nav
      class="mobile-navigation w-full flex xl:hidden flex-col items-center p-4 fixed bottom-0 z-50"
      :class="enabled ? 'enabled' : ''"
    >
      <button @click="enabled = false" class="mb-4">
        <app-logo-icon class="logo-mobile-size" />
      </button>
      <nuxt-link :to="localePath('index')" :class="style">
        Homepage
      </nuxt-link>
      <nuxt-link :to="localePath('components')" :class="style">
        Components
      </nuxt-link>
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
  </div>
</template>

<style lang="scss" scoped>
.desktop-header,
.header {
  height: 119px;
  padding: 0 150px;
}

.mobile-header {
  background-image: url("~assets/svg/curve.svg");
  background-size: cover;
  height: 72px;
  filter: drop-shadow(0 -1px 6px rgba(0, 0, 0, 0.1));
}

.mobile-navigation {
  background-image: url("~assets/svg/curve-full.svg");
  background-size: cover;
  filter: drop-shadow(0 -1px 6px rgba(0, 0, 0, 0.1));
  transform: translateY(200px);
  transition: 150ms ease-in;
  opacity: 0;
  visibility: hidden;

  @media screen and (max-width: 1280px) {
    &.enabled {
      animation: 150ms fadeIn;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      transform: translateY(0px);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }

  a {
    margin: 5px;
    color: #000;
  }
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

.logo-mobile-size {
  height: 32px;
  width: 32px;
}

.margin {
  margin: 0 30px;
}

.nuxt-link-exact-active:not(.logo-size) {
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
  data() {
    return {
      enabled: true
    };
  },
  computed: {
    style() {
      return "font-semibold text-white margin";
    }
  }
};
</script>
