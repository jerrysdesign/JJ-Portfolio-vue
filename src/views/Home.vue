<template lang="pug">
main#home
  hero
  card#onlyPerps.dark
    h3(slot='cardTitle') onlyPerps
    div(slot='cardContent')
      p
        span 2018
        | 數位網路身分不僅可以通過降低成本和擴大可能利益從事交易，而且採用的是可用於保護交易免受攻擊的現代密碼技術達到提高交易。尤其是後者，使實體參與，同時也是安全、私密的更有利的交易。
    ul(slot='cardList')
      li(v-for='item in idhub')
        h4
          | {{ item }}
    flickity.gallery(slot='cardGallery', ref='flickity', :options='flickityOptions')
      figure.item.laptop
        img(src='@/assets/images/only_perps/thumbnail.png', alt='thumbnail', width='1280', height='900')
      figure.item.laptop
        img(src='@/assets/images/only_perps/trad-xl.png', alt='thumbnail', width='1280', height='900')
      figure.item.portrait
        img(src='@/assets/images/only_perps/trad-m.png', alt='thumbnail', width='480', height='640')
      figure.item.phone
        img(src='@/assets/images/only_perps/trad-s-01.png', alt='thumbnail', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/only_perps/trad-s-02.png', alt='thumbnail', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/only_perps/trad-s-03.png', alt='thumbnail', width='360', height='640')

  card#goPacket.light
    h3(slot='cardTitle') goPacket
    div(slot='cardContent')
      p
        span 2019 - 2020
        | goPacket are an mobile & web app for most accurate, automated, user-friendly application for tracking, managing, and accounting purposes.
    ul(slot='cardList')
      li(v-for='item in goPacket')
        h4
          | {{ item }}
    flickity.gallery(slot='cardGallery', ref='flickity', :options='flickityOptions')
      figure.item.iphonex
        img(src='@/assets/images/gopacket-mobile/a00.png', alt='Launch', width='375', height='812')
      figure.item.iphonex
        img(src='@/assets/images/gopacket-mobile/a01.png', alt='Discover', width='375', height='812')
      figure.item.iphonex
        img(src='@/assets/images/gopacket-mobile/a02.png', alt='Discover--Scroll', width='375', height='812')
      figure.item.iphonex
        img(src='@/assets/images/gopacket-mobile/a03.png', alt='Account', width='375', height='812')
      figure.item.iphonex
        img(src='@/assets/images/gopacket-mobile/a04.png', alt='Account--Scroll', width='375', height='812')
      figure.item.iphonex
        img(src='@/assets/images/gopacket-mobile/a06.png', alt='Assets', width='375', height='812')
      figure.item.iphonex
        img(src='@/assets/images/gopacket-mobile/a07.png', alt='Add-Account--wallet', width='375', height='812')
      figure.item.desktop
        img(src='@/assets/images/gopacket-web/a002.png', alt='Collection View', width='1280', height='960')
      figure.item.desktop
        img(src='@/assets/images/gopacket-web/a003.png', alt='Collection View', width='1280', height='960')
  card#idHub.dark
    h3(slot='cardTitle') ID Hub
    div(slot='cardContent')
      p
        span 2018
        | 數位網路身分不僅可以通過降低成本和擴大可能利益從事交易，而且採用的是可用於保護交易免受攻擊的現代密碼技術達到提高交易。尤其是後者，使實體參與，同時也是安全、私密的更有利的交易。
    ul(slot='cardList')
      li(v-for='item in idhub')
        h4
          | {{ item }}
    flickity.gallery(slot='cardGallery', ref='flickity', :options='flickityOptions')
      figure.item.phone
        img(src='@/assets/images/idhub/splash.png', alt='splash', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-generated-ethereum-address-success.png', alt='generated', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-create-contract-pending.png', alt='generated', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-creat-password.png', alt='creat password', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-welcome.png', alt='welcome', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-id-contacts-empty.png', alt='id-contacts', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-id-manager.png', alt='id-manager', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-id-owner-list-1--edit-mode.png', alt='id-manager', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-id-recovery-key.png', alt='recovery-key', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-04-backup-mnemonic-phrase.png', alt='backup-mnemonic-phrase', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-verify-backup-06.png', alt='backup-mnemonic-phrase', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-wallet-list-item__assets--default.png', alt='screen-wallet-list-item__assets--default', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-wallet-list-item__qrcode.png', alt='wallet-list-item__qrcode', width='360', height='640')
      figure.item.phone
        img(src='@/assets/images/idhub/screen-wallet-cryptocoin-send.png', alt='wallet-cryptocoin-send', width='360', height='640')
  card#goExplorer.light
    h3(slot='cardTitle') goExplorer
    div(slot='cardContent')
      p
        span 2019
        | goExplorer 的地址為整合鏈上個是資產的人性化產品
    ul(slot='cardList')
      li(v-for='item in goExplorer')
        h4
          | {{ item }}
    flickity.gallery(slot='cardGallery', ref='flickity', :options='flickityOptions')
      figure.item.laptop
        img(src='@/assets/images/goexplorer/address.png', alt='Address', width='1280', height='900')
      figure.item.laptop
        img(src='@/assets/images/goexplorer/002.png', alt='Address', width='1280', height='900')
      figure.item.laptop
        img(src='@/assets/images/goexplorer/003.png', alt='Address', width='1280', height='900')
      figure.item.laptop
        img(src='@/assets/images/goexplorer/004.png', alt='Address', width='1280', height='900')
</template>

<script>
import hero from '@/components/_hero.vue'
import card from '@/components/_card.vue'
import flickity from '@/components/_flickity.vue'

export default {
  components: {
    hero,
    card,
    flickity
  },
  data () {
    return {
      goPacket: ['Art Direction', 'Branding', 'Product Design', 'Prototyping', 'Illustration', 'Icons'],
      idhub: ['Art Direction', 'Branding', 'Product Design', 'Prototyping', 'Illustration', 'Icons'],
      goExplorer: ['Art Direction', 'Branding', 'Product Design', 'Prototyping', 'Illustration', 'Icons'],
      flickityOptions: {
        freeScroll: true,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: false,
        selectedAttraction: 0.032,
        friction: 0.28
      }
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.content p span {
  color: $yellow;
  margin-right: 1rem;
}
ul {
  max-width: 20vw;
}
#onlyPerps{
  .gallery {
    &:before {
      background-color: hsl(294, 100%, 75%);
      background-image: linear-gradient(340deg, hsl(324, 50%, 30%) 0%, hsl(294, 100%, 75%) 100%);
    }
  }
  .item {
    box-shadow: 0 15px 60px rgba(60, 10, 41, 0.5);
  }
}
#goPacket{
  .gallery {
    &:before {
      background-color: hsl(260, 88%, 90%);
      background-image: linear-gradient(340deg, hsl(260, 88%, 90%) 0%, hsl(265, 22%, 90%) 100%);
    }
  }
  .item {
    box-shadow: 0 15px 60px rgba(60, 50, 155, 0.35);
  }
}
#idHub {
  h3, p {
    color: #F0F0F0;
  }
 .gallery {
    &:before {
      background-color: hsl(220,75%,30%);
      background-image: linear-gradient(340deg, hsl(227,80%,10%) 0%, hsl(220,75%,30%) 100%);
    }
  }
  .item {
    box-shadow: 0 15px 60px hsla(190,70%,0%, 0.4);
  }
}
#goExplorer {
 .gallery {
    &:before {
      background-color: hsl(190,55%,80%);
      background-image: linear-gradient(340deg, hsl(200,75%,70%) 0%, hsl(180,55%,80%) 100%);
    }
  }
  .item {
    box-shadow: 0 15px 60px hsla(190,70%,0%, 0.4);
  }
}
</style>
