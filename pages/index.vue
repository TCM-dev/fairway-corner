<template>
  <div>
    <div class="custom-container">
      <app-section-title class="custom-margin-bottom">
        OUR COMPANY
      </app-section-title>
      <section class="flex flex-col-reverse xl:flex-row section">
        <app-card class="flex-1 gap-right">
          Our goal is to help brands achieve the most powerful impact on
          learners' lives by using some of the most cutting-edge technology
          available to create and develop the next generation learning campaign
          for the modern 21st-century natural retailer.
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
          natural channel like Sprouts Farmers Market, Krogers, and Whole Foods
          Market.
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
      <app-section-title class="custom-margin-bottom custom-margin-top">
        QU’EST-CE QUE L’E-LEARNING
      </app-section-title>
    </div>
    <section class="faq bg-primary text-white flex custom-container">
      <div class="flex-1 flex flex-col">
        <span class="text-4xl font-bold">Why us?</span>
        <p class="lh-27">
          We are not just another learning platform, we offer a LMS specialized
          in the natural products industry. We go a step further and offer a
          unique and cost-effective training & retailer strategy. We use a 3
          step employee training methodology in conjunction with the retailers
          educational needs and in-store marketing campaigns in order to deliver
          the most effective and engaging brand training:
        </p>
      </div>
      <div class="flex-1 flex flex-col">
        <span class="text-4xl font-bold">Who are they?</span>
        <p class="lh-27">
          Visit production facilities and get to know the brand
        </p>
        <span class="text-4xl font-bold mt-4">What's in it for me?</span>
        <p class="lh-27">
          Learn about the product
        </p>
        <span class="text-4xl font-bold mt-4">Why should I buy it?</span>
        <p class="lh-27">
          Retain key brand messages
        </p>
      </div>
      <div class="flex-1 flex flex-col">
        <span class="text-4xl font-bold custom-underline">
          ARE YOU INTERESTED?
        </span>
        <p class="lh-27 mt-4">
          Discover all our different offers
        </p>
        <div class="mt-4">
          <app-button text class="no-neo">See the demo</app-button>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.lh-27 {
  line-height: 27px;
}

.custom-underline {
  position: relative;
  padding-bottom: 9px;

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
  & > div:not(:last-child) {
    margin-right: 150px;
  }
}
</style>
