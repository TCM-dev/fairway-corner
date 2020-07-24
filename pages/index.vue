<template>
  <div>
    <app-section-title class="custom-margin-bottom">
      OUR COMPANY
    </app-section-title>
    <section class="flex flex-col-reverse xl:flex-row section">
      <app-card class="flex-1 gap-right">
        Our goal is to help brands achieve the most powerful impact on learners'
        lives by using some of the most cutting-edge technology available to
        create and develop the next generation learning campaign for the modern
        21st-century natural retailer.
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
        Our training mission is to collaboratively target key retailers, support
        employee development, and promote brand awareness within the natural
        channel like Sprouts Farmers Market, Krogers, and Whole Foods Market.
      </app-card>
    </section>
    <section class="flex flex-col-reverse xl:flex-row section">
      <app-card class="flex-1 gap-right">
        We build and/or complement clients training offers thanks to our
        extensive experience in the natural channel, digital learning expertise
        and retailer/store strategy.
      </app-card>
      <div class="flex flex-1 justify-center items-center mb-6 xl:mb-0">
        <img src="~/assets/img/home/build.png" />
      </div>
    </section>
    <app-section-title class="custom-margin-bottom custom-margin-top">
      QU’EST-CE QUE L’E-LEARNING
    </app-section-title>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
