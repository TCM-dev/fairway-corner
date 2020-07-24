<template>
  <div>
    <app-section-title class="mb-2">Contactez-nous</app-section-title>
    <p
      class="text-base mt-6 mb-2"
    >Visit production facilities and get to know the brand (Who are they?)</p>
    <div class="max-w-xl mx-auto">
      <div class="md:flex md:flex-row">
        <app-input-text class="my-2 md:w-1/2 md:mx-2" placeholder="Prénom" />
        <app-input-text class="my-2 md:w-1/2 md:mx-2" placeholder="Nom" />
      </div>
      <div class="md:flex md:flex-row">
        <app-input-text class="my-2 md:w-1/2 md:mx-2" placeholder="E-mail" />
        <app-input-text class="my-2 md:w-1/2 md:mx-2" placeholder="Entreprise" />
      </div>
      <div class="p-2">
        <textarea
          class="w-full py-2 px-4 font-medium rounded-md border border-lightGrey custom-box-shadow"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <app-button>Send</app-button>
    </div>
  </div>
</template>

<style>
.custom-box-shadow {
  box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.05);
}
</style>