<template>
  <div>
    <div>
      <div class="xl:h-screen xl:flex items-center hp-top">
        <div>
          <span class="font-bold title text-center xl:text-left"
            >{{$t('immersion')}}</span
          >
          <p class="lh-27 paragraph">
            {{$t('description')}}
          </p>
          <img
            src="~/assets/img/home/perso.png"
            class="perso perso-animate my-10"
          />
          <nuxt-link to="teaser" class="flex mt-12 items-center justify-center xl:justify-start">
            <div
              class="play bg-primary flex items-center justify-center rounded-full"
            >
              <img src="~/assets/svg/icons/play.svg" />
            </div>
            <span class="ml-6 text-primary text-4xl font-semibold"
              >{{$t('play')}}</span
            >
          </nuxt-link>
          <div class="flex xl:block justify-center">
            <app-button class="mt-12">{{$t('request')}}</app-button>
          </div>
        </div>
      </div>
      <div class="custom-container">
        <app-section-title
          class="custom-margin-bottom"
          style="margin-top: 100px;"
          >OUR COMPANY</app-section-title
        >
        <section class="flex flex-col-reverse xl:flex-row section">
          <app-card class="flex-1 gap-right">
            Our goal is to help brands achieve the most powerful impact on
            learners' lives by using some of the most cutting-edge technology
            available to create and develop the next generation learning
            campaign for the modern 21st-century natural retailer.
          </app-card>
          <div class="flex flex-1 justify-center items-center mb-6 xl:mb-0">
            <img src="~/assets/img/home/goal.png" />
          </div>
        </section>
        <section class="flex flex-col xl:flex-row section">
          <div
            class="flex flex-1 justify-center items-center gap-right mb-6 xl:mb-0"
          >
            <img src="~/assets/img/home/training.png" />
          </div>
          <app-card class="flex-1">
            Our training mission is to collaboratively target key retailers,
            support employee development, and promote brand awareness within the
            natural channel like Sprouts Farmers Market, Krogers, and Whole
            Foods Market.
          </app-card>
        </section>
        <section class="flex flex-col-reverse xl:flex-row section">
          <app-card class="flex-1 gap-right">
            We build and/or complement clients training offers thanks to our
            extensive experience in the natural channel, digital learning
            expertise and retailer/store strategy.
          </app-card>
          <div class="flex flex-1 justify-center items-center mb-6 xl:mb-0">
            <img src="~/assets/img/home/build.png" />
          </div>
        </section>
        <app-section-title class="custom-margin-bottom custom-margin-top"
          >QU’EST-CE QUE L’E-LEARNING</app-section-title
        >
      </div>
      <section
        class="faq bg-primary text-white flex flex-col xl:flex-row custom-container relative"
      >
        <div
          class="xl:absolute custom-top left-0 flex flex-col xl:flex-row w-full"
        >
          <app-drop-down-card class="mb-8 xl:mb-0 xl:flex-1">
            <app-section-title class="text-black text-base"
              >OUR SPECIALITY</app-section-title
            >
          </app-drop-down-card>
          <app-drop-down-card class="mb-8 xl:mb-0 xl:flex-1">
            <app-section-title class="text-black text-base"
              >EFFICIENT LEARNING</app-section-title
            >
          </app-drop-down-card>
          <app-drop-down-card class="mb-8 xl:mb-0 xl:flex-1">
            <app-section-title class="text-black text-base"
              >DELIVER</app-section-title
            >
          </app-drop-down-card>
        </div>
        <div class="xl:flex-1 flex flex-col">
          <span class="xl:text-4xl font-bold">Why us?</span>
          <p class="lh-27">
            We are not just another learning platform, we offer a LMS
            specialized in the natural products industry. We go a step further
            and offer a unique and cost-effective training & retailer strategy.
            We use a 3 step employee training methodology in conjunction with
            the retailers educational needs and in-store marketing campaigns in
            order to deliver the most effective and engaging brand training:
          </p>
        </div>
        <div class="xl:flex-1 flex flex-col">
          <span class="xl:text-4xl font-bold mt-8 xl:mt-0">Who are they?</span>
          <p class="lh-27">
            Visit production facilities and get to know the brand
          </p>
          <span class="xl:text-4xl font-bold mt-8 xl:mt-4"
            >What's in it for me?</span
          >
          <p class="lh-27">Learn about the product</p>
          <span class="xl:text-4xl font-bold mt-8 xl:mt-4"
            >Why should I buy it?</span
          >
          <p class="lh-27">Retain key brand messages</p>
        </div>
        <div class="xl:flex-1 flex flex-col">
          <span class="xl:text-4xl font-bold custom-underline mt-8 xl:mt-0"
            >ARE YOU INTERESTED?</span
          >
          <p class="lh-27 mt-4">Discover all our different offers</p>
          <div class="mt-4">
            <app-button text class="no-neo">See the demo</app-button>
          </div>
        </div>
      </section>
      <div class="custom-container">
        <app-section-title class="custom-margin-top"
          >NOS OFFRES</app-section-title
        >
        <section class="xl:flex">
          <div class="left-line font-16 mt-10 xl:flex-1 custom-mr">
            <span class="font-bold">DIGITAL LEARNING SERVICES</span>
            <ul>
              <li>Design, develop and deliver immersive e-learning modules</li>
            </ul>
          </div>
          <div class="left-line font-16 mt-10 xl:flex-1 custom-mr">
            <span class="font-bold">DIGITAL PRODUCTS</span>
            <ul>
              <li>Online platform “Fairway Corner”</li>
              <li>
                Tailor-made e-learning modules and learning programs, available
                on the platform 24/7
              </li>
            </ul>
          </div>
          <div class="left-line font-16 mt-10 xl:flex-1">
            <span class="font-bold"
              >RETAILER TRAINING STRATEGY SERVICES ALIGNED WITH</span
            >
            <ul>
              <li>
                Category reviews, in-store marketing campaigns, or merchandising
                programs
              </li>
            </ul>
          </div>
        </section>
        <div class="xl:flex items-center mt-8">
          <div class="flex items-center custom-mr">
            <img class="w-24 xl:w-auto" src="~/assets/img/home/1.png" />
            <div class="flex-1">
              <span class="font-16 font-bold mb-4 uppercase block"
                >Modules généraux</span
              >
              <p>
                les apprenants, afin d’attiser leur curiosité et de maximiser
                les taux de rétention de l’information via des teaser vidéo, des
                activités de type rapid learning
              </p>
            </div>
          </div>
          <div class="flex items-center custom-mr">
            <img class="w-24 xl:w-auto" src="~/assets/img/home/2.png" />
            <div class="flex-1">
              <span class="font-16 font-bold mb-4 uppercase block"
                >Modules spécifiques</span
              >
              <p>
                efficacement les apprenants : en visant des compétences et
                connaissances clés nécessaires à leur métier et en formulant des
                objectifs pédagogiques cohérents et atteignables et mesurables
              </p>
            </div>
          </div>
          <div>
            <span
              class="font-16 font-bold mt-12 text-primary mb-4 uppercase block"
              >Modules spécifiques</span
            >
            <p>
              efficacement les apprenants : en visant des compétences et
              connaissances clés nécessaires à leur métier et en formulant des
              objectifs pédagogiques cohérents et atteignables et mesurables
            </p>
            <div class="flex xl:block justify-center">
              <app-button class="mt-4">See the offers</app-button>
            </div>
          </div>
        </div>
        <app-section-title class="mt-16">NOS PARTENAIRES</app-section-title>
        <div class="xl:flex justify-between items-baseline">
          <div class="flex flex-col mt-16 xl:mt-0">
            <img
              class="h-auto mx-auto"
              src="~/assets/img/home/natural_retailers.png"
            />
            <span class="text-center mt-6">Natural Retailers</span>
          </div>
          <div class="flex flex-col mt-16 xl:mt-0 xl:mx-16">
            <img class="mx-auto" src="~/assets/img/home/brands.png" />
            <span class="text-center mt-6">Brands</span>
          </div>
          <div class="flex flex-col mt-16 xl:mt-0">
            <img class="mx-auto" src="~/assets/img/home/sales_force.png" />
            <span class="text-center mt-6">Sales force</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto mb-8">
      <app-contact />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hp-top {
  padding: 45px 45px;

  @media screen and (min-width: 1280px) {
    padding: 55px 150px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url("../assets/img/home/background.png");
    background-size: 105% 1150px;
    background-position-x: center;
    background-position-y: -200px;
    background-repeat: no-repeat;
  }
}

.title {
  font-size: 24px;
  color: #121212;
  display: block;

  @media screen and (min-width: 1280px) {
    font-size: 50px;
    width: 575px;
  }
}

.paragraph {
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    width: 525px;
  }
}

.perso {
  max-width: 200px;
  margin: 32px auto;

  @media screen and (min-width: 640px) {
    max-width: 300px;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    width: 400px;
    top: 130px;
    right: 190px;
    max-width: inherit;
  }

  animation: floating 10s ease-in-out infinite;
}

@keyframes floating {
  0% {
    transform: rotate(5deg) translateY(30px);
  }
  10% {
    transform: rotate(7deg) translateY(20px);
  }
  30% {
    transform: rotate(0deg) translateY(-10px);
  }
  35% {
    transform: rotate(-2deg) translateY(-8px);
  }
  70% {
    transform: rotate(-6deg) translateY(10px);
  }
  95% {
    transform: rotate(3deg) translateY(15px);
  }
  100% {
    transform: rotate(5deg) translateY(30px);
  }
}

.play {
  height: 49px;
  width: 49px;
}

.lh-27 {
  line-height: 27px;
}

.custom-mr {
  @media screen and (min-width: 1280px) {
    margin-right: 160px;
  }
}

.font-16 {
  font-size: 16px;
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
}

.left-line {
  padding: 5px 20px;
  position: relative;

  span {
    margin-bottom: 22px;
    display: block;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  &::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 100px;
    @apply bg-primary;
    left: 0;
    top: 0;
  }
}

.custom-underline {
  position: relative;
  padding-bottom: 16px;

  @media screen and (min-width: 1280px) {
    padding-bottom: 9px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 97px;
    height: 7px;
    background: white;
  }
}

.custom-margin-top {
  margin-top: 85px;

  @media screen and (min-width: 1280px) {
    margin-top: 140px;
  }
}

.custom-margin-bottom {
  @media screen and (min-width: 1280px) {
    margin-bottom: 115px;
  }
}

.section {
  margin-top: 45px;

  @media screen and (min-width: 1280px) {
    margin-top: 0px;
  }
}

.gap-right {
  @media screen and (min-width: 1280px) {
    margin-right: 50px;
  }
}

.faq {
  @media screen and (min-width: 1280px) {
    padding-top: 124px;
    & > div:not(:last-child) {
      margin-right: 150px;
    }
  }

  .text-base {
    font-size: 16px !important;
    @media screen and (min-width: 1280px) {
      font-size: 36px !important;
    }
  }

  .custom-top {
    // padding: 0 65px;

    @media screen and (min-width: 1280px) {
      padding: 0 150px;
    }

    @media screen and (min-width: 1280px) {
      & > div:not(:last-child) {
        margin-right: 65px;
      }
    }
  }
}

.custom-top {
  top: -108px;
}
</style>
