<template>
  <div class="custom-container flex flex-col items-center">
    <app-section-title class="m-auto">SIGN UP</app-section-title>
    <div class="custom-margin flex flex-col xl:flex-row">
      <section class="flex flex-col items-center custom-width">
        <!-- Inputs -->
        <div class="w-full flex flex-col mt-2">
          <label class="font-semibold mb-1">E-mail</label>
          <app-input-text placeholder="Entrer votre adresse mail" />
        </div>
        <div class="w-full flex flex-col mt-2">
          <label class="font-semibold mb-1">Mot de passe</label>
          <app-input-text placeholder="Entrer votre mot de passe" />
        </div>
        <div class="w-full flex flex-col mt-2">
          <label class="font-semibold mb-1">Confirmer votre de passe</label>
          <app-input-text placeholder="Confirmer votre mot de passe" />
        </div>
        <app-checkbox checkbox1 class="text-sm mt-2">
          J'ai lu et j'accepte
          <a href="#" class="underline">les conditions d'utilisations</a>
        </app-checkbox>
        <app-button class="mt-8">S'inscrire</app-button>
      </section>
      <hr class="bg-primary hidden xl:block" />
      <div class="mobile-hr block xl:hidden">
        <div>
          <span>Ou</span>
        </div>
      </div>
      <section class="flex flex-col items-center custom-width mt-6">
        <span class="font-semibold text-3xl">S'inscrire avec*</span>
        <!-- <div class="flex"> -->
        <button class="connect-btn facebook">
          <img src="~assets/svg/facebook.svg" />
          <span class="hidden xl:block mr-1">Continuer avec</span>
          Facebook
        </button>
        <button class="connect-btn google">
          <img src="~assets/svg/google.svg" />
          <span class="hidden xl:block mr-1">Continuer avec</span>
          Google
        </button>
        <!-- </div> -->
        <p class="second-custom-width text-sm">
          *En choisissant la connexion avec les réseaux sociaux vous accepter
          <a href="#" class="underline">les conditions d'utilisations</a>
        </p>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-margin {
  margin-top: 105px !important;
}

.custom-width {
  width: 100%;

  @media screen and (min-width: 640px) {
    width: 350px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 165px;
  }
}

.second-custom-width {
  width: 100%;
  @media screen and (min-width: 640px) {
    max-width: 450px;
  }
  margin: 58px 0 0;
}

hr {
  width: 3px;
  height: 350px;
}

.mobile-hr {
  width: 100%;
  height: 1px;
  background: #d0d5db;
  position: relative;
  margin-top: 25px;

  div {
    position: absolute;
    right: 0;
    left: 0;
    margin: 0;
    bottom: -0.75em;
    text-align: center;

    span {
      background: #f1f3f6;
      padding: 0.5em;
      color: #d0d5db;
      line-height: 1;
    }
  }
}

.connect-btn {
  padding: 12px 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-top: 1em;
  width: 147px;

  @media screen and (min-width: 1280px) {
    margin-top: 1.5em;
    width: 319px;
  }

  img {
    margin-right: 1em;
  }

  &.google {
    background: #fff;
  }

  &.facebook {
    background: #1877f2;
    color: #fff;
    font-weight: 700;
  }
}
</style>
