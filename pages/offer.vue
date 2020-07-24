<template>
  <div>
    <div class="custom-container flex flex-col items-center">
      <app-section-title class="m-auto title">OFFERS</app-section-title>
      <div class="w-full mt-8 flex flex-col items-center">
        <app-section-title class="uppercase xl:text-left xl:self-start">Un apprentissage unique</app-section-title>
        <span
          class="mt-8 block text-2xl text-center xl:text-left xl:self-start"
        >Réalité virtuelle / E-learning</span>
        <div class="xl:flex items-center">
          <div class="left-pointer">
            <img src="~/assets/img/offer/vrheadset.png" class="mx-auto xl:mx-0 flex-1 custom-gap" />
          </div>
          <div class="flex-1">
            <span
              class="uppercase mt-8 block text-3xl font-semibold xl:font-bold text-center xl:text-left"
            >Vidéo en réalité virtuel / 360°</span>
            <p class="mt-8">
              Vidéo prévu pour un mode VR expliquer :
              <br />- que les vidéo seront en 360°,
              <br />- qu’elles pourront être lu avec un smartphone avec ou sans casque
              VR
              <br />- qu’elle seront accessible et lisible sur ordinateur grâce à la
              sourie
            </p>
            <app-button class="mt-8" full-width>Fairway corner plateforme</app-button>
          </div>
        </div>
        <div class="xl:flex flex-row-reverse items-center mt-16">
          <div class="right-pointer">
            <img src="~/assets/img/offer/laptop.png" class="mx-auto xl:mx-0 flex-1" />
          </div>
          <div class="flex-1 custom-gap">
            <span
              class="uppercase mt-8 block text-3xl font-semibold xl:font-bold text-center xl:text-left"
            >Apprentissage en e-learning</span>
            <p class="mt-8">
              La flexibilité d’apprentissage : l’apprenant choisit lui-même le
              lieu et le moment pour se former.
              <br />
              <br />Faire face à des situations proches de la réalité grâce à la
              simulation 3D représente un atout majeur : les apprenants peuvent
              s’entrainer et se perfectionner.
              <br />
              <br />Adapter et faire évoluer les contenus pour une meilleure pertinence
              et efficacité de la formation.
              <br />
              <br />Etre un acteur à part entière dans le processus de formation : être
              actif plutôt que passif permet un meilleur apprentissage et implique
              directement l’apprenant.
            </p>
            <app-button class="mt-8" full-width>Fairway corner plateforme</app-button>
          </div>
        </div>
        <app-section-title
          class="custom-margin-top xl:text-left xl:self-start"
        >NOS MODULES D'E-LEARNING</app-section-title>
        <span
          class="mt-8 block text-2xl text-center xl:text-left xl:self-start"
        >Pour s’offrir une expérience de formation immersive et interactive</span>
        <div class="xl:flex">
          <div class="flex flex-col justify-center items-center custom-mr">
            <img class="w-24 xl:w-auto xl:-mb-16" src="~/assets/img/home/1.png" />
            <div class="flex-1 custom-max-width">
              <span class="font-16 font-bold mb-4 uppercase block text-center">Modules généraux</span>
              <p class="text-center">
                les apprenants, afin d’attiser leur curiosité et de maximiser les
                taux de rétention de l’information via des teaser vidéo, des
                activités de type rapid learning
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img class="w-24 xl:w-auto xl:-mb-16" src="~/assets/img/home/2.png" />
            <div class="flex-1 custom-max-width">
              <span class="font-16 font-bold mb-4 uppercase block text-center">Modules spécifiques</span>
              <p class="text-center">
                efficacement les apprenants : en visant des compétences et
                connaissances clés nécessaires à leur métier et en formulant des
                objectifs pédagogiques cohérents et atteignables et mesurables
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto mb-8">
      <app-contact />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: #121212;
}

img {
  max-width: 500px;
}

.custom-gap {
  @media screen and (min-width: 1280px) {
    margin-right: 150px;
  }
}

.custom-max-width {
  @media screen and (min-width: 1280px) {
    max-width: 420px;
  }
}

.custom-mr {
  @media screen and (min-width: 1280px) {
    margin-right: 250px;
  }
}

p {
  max-width: 500px;
}

.left-pointer {
  position: relative;
  @media screen and (min-width: 1280px) {
    &::before {
      z-index: -1;
      content: "";
      position: absolute;
      right: -40px;
      top: 180px;
      width: 300px;
      height: 2px;
      @apply bg-primary;
    }
  }
}

.right-pointer {
  position: relative;
  @media screen and (min-width: 1280px) {
    &::before {
      z-index: -1;
      content: "";
      position: absolute;
      left: -200px;
      top: 40px;
      width: 400px;
      height: 2px;
      @apply bg-primary;
    }
  }
}

.custom-margin-top {
  margin-top: 85px;

  @media screen and (min-width: 1280px) {
    margin-top: 140px;
  }
}
</style>
