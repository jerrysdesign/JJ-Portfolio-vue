<template lang="pug">
main
  casehero
    ul(slot="headerRole")
      li
        h5 Role
      li
        h5 Lead designer
    ul(slot="headerScope")
      li
        h5 Scope
      li
        h5 Product Design
      li
        h5 Art Direction, Branding
      li
        h5 Animation, Illustration
      li
        h5 Prototyping
    ul(slot="headerDeliverables")
      li
        h5 Deliverables
      li
        h5 Guidelines
      li
        h5 Mockups
      li
        h5 Prototype
    ul(slot="headerDuration")
      li
        h5 Duration
      li
        h5 4 months
    h3(slot="headerTitle") Itondo
    ul(slot="headerChallenges")
      li
        h5 Challenges
      li
        div
          span 1
          p Creating brand and personality for a digital e-commerce product.
      li
        div
          span 2
          p Coming up with a design that respects art and its audience
      li
        div
          span 3
          p Delivering a robust AR experience.
    .h-pic(slot="headerPic")
  article
    | We began the project in a team of three designers with interviewing Karen and Dirk, who came to us with their idea for the product. From the beginning, we all felt the augmented reality tech could have a transformative effect on the online art trade industry. So that’s what we started with, a rough working proof of concept for the AR module that allowed us to rally interest around the idea and get a feeling of how well it worked.
</template>

<script>
import CaseHero from '@/components/_case-hero.vue'

export default {
  data: () => {
    return {
    }
  },
  components: {
    CaseHero
  }
}
</script>

<style lang="scss" scoped>

@import
'@/assets/scss/_variables';

.h-right {
  background-image: linear-gradient(to top, #FDCAF1 0%, #E6DEE9 100%);
}
.h-pic {
  width: 1380px; height: 750px;
  background: url('../assets/itondo-hero.jpg') no-repeat 0 0;
  background-size: contain;
}
.gallery::before {
  background-color: hsl(315, 90%, 90%);
  background-image: linear-gradient(340deg, hsl(315, 90%, 90%) 0%, hsl(280, 20%, 90%) 100%);
}
.tablet-video, video {
  width: 682px; height: 512px;
}
.picture {
  width: 640px; height: 572px;
  padding: 30px;
  background-color: white;
}
.item {
  box-shadow: 0 15px 60px hsla(320,50%,40%, 0.35);
}

@import
'../scss/cases';

@media (max-width: 680px) {
  .tablet-video, video {
    width: 512px; height: 384px;
  }
  .picture {
    width: 580px; height: 512px;
    padding: 0;
  }
}
@media (max-width: 560px) {
  .h-pic {
    margin-left: -18.5rem;
  }
  .tablet-video, video {
    width: 480px; height: 360px;
  }
  .picture {
    width: 464px; height: 410px;
  }
}
@media (max-width: 500px) {
  .tablet-video, video {
    width: 416px; height: 312px;
  }
  .picture {
    width: 406px; height: 358px;
  }
}
@media (max-width: 420px) {
  .tablet-video, video {
    width: 320px; height: 240px;
  }
  .picture {
    width: 290px; height: 256px;
  }
}
@media (max-width: 320px) {
  .tablet-video, video {
    width: 288px; height: 216px;
  }
}
</style>
