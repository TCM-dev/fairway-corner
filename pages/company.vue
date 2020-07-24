<template>
  <div>
    <div class="custom-container flex flex-col items-center">
      <app-section-title class="m-auto title">COMPANY</app-section-title>
      <app-section-title class="mt-16 text-left self-start">OUR MISSIONS</app-section-title>
      <div class="xl:flex mt-16">
        <div class="flex flex-col justify-center items-center custom-mr">
          <img class="w-64 mb-8" src="~/assets/img/company/target.png" />
          <div class="flex-1 custom-max-width">
            <span class="font-16 font-bold mb-4 uppercase block text-center">MISSION</span>
            <p class="text-center">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img class="w-48 mb-8 -mt-8 xl:my-0" src="~/assets/img/company/question.png" />
          <div class="flex-1 custom-max-width -mt-24 xl:my-0">
            <span class="font-16 font-bold mb-4 uppercase block text-center">PROBLEMATIC</span>
            <p class="text-center">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>
      <app-section-title class="mt-16 text-left self-start">OUR VALUES</app-section-title>
      <section class="list-of-card">
        <app-soft-card>
          <img class="custom-h" src="~/assets/img/company/innovation.png" />
          <span class="uppercase font-bold text-2xl">Innovation</span>
          <p class="card-text text-center">
            By using the latest technology available we can share a message of
            health and inspire and wellness in others
          </p>
        </app-soft-card>
        <app-soft-card>
          <img class="custom-h" src="~/assets/img/company/simplicity.png" />
          <span class="uppercase font-bold text-2xl">Simplicity</span>
          <p class="card-text text-center">We want an easy design that makes sense for everyone</p>
        </app-soft-card>
        <app-soft-card>
          <img class="custom-h" src="~/assets/img/company/engagement.png" />
          <span class="uppercase font-bold text-2xl">Engagement</span>
          <p class="card-text text-center">
            Involving learners provides the greatest impact on growth and
            development
          </p>
        </app-soft-card>
        <app-soft-card>
          <img class="custom-h" src="~/assets/img/company/natural.png" />
          <span class="uppercase font-bold text-2xl">Natural</span>
          <p class="card-text text-center">
            By using the latest technology available we can share a message of
            health and inspire and wellness in others
          </p>
        </app-soft-card>
      </section>
      <section class="second-list-of-card">
        <app-soft-card>
          <img class="custom-h" src="~/assets/img/company/collab.png" />
          <span class="uppercase font-bold text-2xl">Collaboration</span>
          <p class="card-text text-center">
            By using the latest technology available we can share a message of
            health and inspire and wellness in others
          </p>
        </app-soft-card>
        <app-soft-card>
          <img class="custom-h" src="~/assets/img/company/values.png" />
          <span class="uppercase font-bold text-2xl">Values</span>
          <p class="card-text text-center">
            By using the latest technology available we can share a message of
            health and inspire and wellness in others
          </p>
        </app-soft-card>
        <app-soft-card class="mr-0">
          <img class="custom-h" src="~/assets/img/company/strategy.png" />
          <span class="uppercase font-bold text-2xl">Strategy</span>
          <p class="card-text text-center">
            By using the latest technology available we can share a message of
            health and inspire and wellness in others
          </p>
        </app-soft-card>
      </section>
      <app-section-title class="mt-16 text-left self-start">OUR TEAM</app-section-title>
      <section class="xl:flex">
        <div class="flex flex-col items-center custom-mr">
          <img src="~/assets/img/company/profil1.png" class="avatar" />
          <span class="uppercase font-semibold text-center mt-2">Murielle</span>
          <p class="mt-2">
            Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img src="~/assets/img/company/profil2.png" class="avatar" />
          <span class="uppercase font-semibold text-center mt-2">Andrew</span>
          <p class="mt-2">
            Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam
          </p>
        </div>
      </section>
      <app-section-title class="mt-16 text-left self-start">OUR BUSINESS STORY</app-section-title>
      <section class="mt-16">
        <div class="flex">
          <div class="flex flex-col flex-1 business-story-left items-center">
            <span class="font-semibold text-2xl">LOREM</span>
            <p class="pt-4">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
          <hr class="vertical-line" />
          <div class="flex-1" />
        </div>
        <div class="flex">
          <div class="flex-1" />
          <hr class="vertical-line" />
          <div class="flex flex-col flex-1 business-story-right items-center">
            <span class="font-semibold text-2xl">LOREM</span>
            <p class="pt-4">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col flex-1 business-story-left items-center">
            <span class="font-semibold text-2xl">LOREM</span>
            <p class="pt-4">
              Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
          <hr class="vertical-line" />
          <div class="flex-1" />
        </div>
      </section>
      <div class="w-64 mt-8 mb-8">
        <app-logo />
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

.vertical-line {
  height: 250px;
  @media screen and (min-width: 1280px) {
    height: 200px;
  }
  width: 5px;
  margin: 0 20px;
  box-shadow: -3px -3px 6px #fff,
    3px 3px 6px rgba($color: #000000, $alpha: 0.16);
}

.business-story-left {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 15px;
    right: -20px;
    width: 62px;
    height: 1px;
    @apply bg-primary;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 7.5px;
    right: 35px;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    @apply bg-primary;
  }
}

.business-story-right {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 15px;
    left: -20px;
    width: 62px;
    height: 1px;
    @apply bg-primary;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 7.5px;
    left: 35px;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    @apply bg-primary;
  }
}

.custom-h {
  height: 80px;
}

.avatar {
  height: 176px;
  width: 176px;
  margin-top: 30px;
}

@media screen and (min-width: 1280px) {
  .list-of-card {
    display: grid;
    grid-template-columns: 260px 260px 260px 260px;
    grid-template-rows: auto;
    column-gap: 65px;
    row-gap: 55px;
    justify-content: center;
  }

  .second-list-of-card {
    display: grid;
    grid-template-columns: 260px 260px 260px;
    grid-template-rows: auto;
    column-gap: 65px;
    row-gap: 55px;
    margin-top: 55px !important;
    justify-content: center;
  }
}

.list-of-card {
  margin-top: 25px;
}

.list-of-card,
.second-list-of-card {
  display: grid;
  row-gap: 25px;
}
// .second-list-of-card {
//   margin-top: -20px;
// }

.card-text {
  color: #707070;
  font-size: 14px;
  line-height: 16px;
  margin-top: 27px;
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
