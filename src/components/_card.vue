<template lang="pug">
section.card
  .content
    slot(name="cardTitle")
    slot(name="cardContent")
    slot(name="cardList")
  keep-alive
    slot(name="cardGallery")
  slot(name="cardStatic")
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_variables' as *;
@use '@/assets/scss/_cases' as *;
section {
  position: relative;
	width: 100%;
	padding: 5vh 0 10vh 0;
	margin: 0 0 15vw 0;
	border-radius: 2px 0 0 2px;

  &::before {
    content: '';
    position: absolute; left: 5vw; right: 0; top: 0; bottom: 0;
    z-index: -1;
  }
}
.light {
  &::before {
    background: linear-gradient(130deg, hsl(180,10%,97%), hsl(180,20%,94%));
  }
  .dot::before {}
}
.dark {
  &::before {
    background: linear-gradient(130deg, hsl(180,5%,12%), hsl(180,5%,2%));
  }
  .flickity-page-dots {
    .dot::before {
      background: hsla(180,20%,100%, 0.2);
    }
    .dot::hover::before {
      background: hsla(180,20%,100%, 0.9);
    }
  }
}

@media (max-width: 960px) {
  section::before {
    left: 0;
  }
}
.h-right {
  background-image: linear-gradient(to top, #FDCAF1 0%, #E6DEE9 100%);
}
.h-pic {
  width: 1380px; height: 750px;
  // background: url('../assets/itondo-hero.jpg') no-repeat 0 0;
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
