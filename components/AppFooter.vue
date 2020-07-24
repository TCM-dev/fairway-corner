<template>
  <footer class="bg-primaryGreen p-4 mb-8">
    <app-logo class="block max-w-xs custom-logo-layout" white />
    <div>
      <div class="flex flex-col md:flex-row custom-footer-layout">
        <div class="w-full mb-4">
          <div class="flex justify-between mb-4">
            <nuxt-link class="relative link-arrowed text-white uppercase font-bold" to="/">Home</nuxt-link>
            <img src="~/assets/svg/icons/chevron-bottom-white.svg" alt class="md:hidden" />
          </div>
          <div class="flex flex-col">
            <nuxt-link class="text-white" to="/">Présentation</nuxt-link>
            <nuxt-link class="text-white" to="/">E-learning</nuxt-link>
            <nuxt-link class="text-white" to="/">Clients</nuxt-link>
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex justify-between mb-4">
            <nuxt-link class="relative link-arrowed text-white uppercase font-bold" to="/">Offer</nuxt-link>
            <img src="~/assets/svg/icons/chevron-bottom-white.svg" alt class="md:hidden" />
          </div>
          <div class="flex flex-col">
            <nuxt-link class="text-white" to="/">Nos modules</nuxt-link>
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex justify-between mb-4">
            <nuxt-link class="relative link-arrowed text-white uppercase font-bold" to="/">Company</nuxt-link>
            <img src="~/assets/svg/icons/chevron-bottom-white.svg" alt class="md:hidden" />
          </div>
          <div class="flex flex-col">
            <nuxt-link class="text-white" to="/">Nos missions</nuxt-link>
            <nuxt-link class="text-white" to="/">Nos valeurs</nuxt-link>
            <nuxt-link class="text-white" to="/">Notre équipe</nuxt-link>
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex justify-between mb-4">
            <nuxt-link class="relative link-arrowed text-white uppercase font-bold" to="/">Login</nuxt-link>
            <!-- <img src="~/assets/svg/icons/chevron-bottom-white.svg" alt class="md:hidden" /> -->
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex justify-between mb-4">
            <nuxt-link
              class="relative link-arrowed text-white uppercase font-bold"
              to="/"
            >Request a demo</nuxt-link>
            <!-- <img src="~/assets/svg/icons/chevron-bottom-white.svg" alt class="md:hidden" /> -->
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="flex items-center flex-col justify-between mb-4">
            <p class="w-full text-center uppercase text-white font-bold">Social media</p>
            <div class="flex mt-2">
              <nuxt-link to="/" class="mx-2">
                <div>
                  <img src="~/assets/svg/social-media/facebook.svg" alt />
                </div>
              </nuxt-link>
              <nuxt-link to="/" class="mx-2">
                <div>
                  <img src="~/assets/svg/social-media/twitter-white.svg" alt />
                </div>
              </nuxt-link>
              <nuxt-link to="/" class="mx-2">
                <div>
                  <img src="~/assets/svg/social-media/linkedin-white.svg" alt />
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full mb-4 custom-link-layout">
        <div class="flex justify-center flex-wrap lg:justify-start">
          <nuxt-link to="/" class="text-white m-2">Terms & conditions</nuxt-link>
          <nuxt-link to="/" class="text-white m-2">Privacy policy</nuxt-link>
          <nuxt-link to="/" class="text-white m-2">Cookies policy</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.custom-footer-layout {
  padding: 1rem;
}
@media screen and (min-width: 1280px) {
  .custom-footer-layout {
    padding: 4rem 150px;
  }
}
.custom-link-layout {
  padding: 1rem;
}
@media screen and (min-width: 1280px) {
  .custom-link-layout {
    padding: 1rem 150px;
  }
}
.custom-logo-layout {
  margin: 1rem;
}
@media screen and (min-width: 1280px) {
  .custom-logo-layout {
    margin: 1rem 150px;
  }
}
</style>