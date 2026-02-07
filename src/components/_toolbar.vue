<template lang="pug">
nav#navigationBar
  h4 {{ $t('nav.title') }}
  p {{ $t('nav.subtitle') }}
  a.github(href="https://github.com/jerrysdesign", target="_blank", title="@jerrysdesign on Github")
    svg(width="24", height="24", viewBox="0 0 24 24", fill="none", xmlns="http://www.w3.org/2000/svg")
      path(d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.5C19.9988 8.30496 19.5325 7.15731 18.7 6.3C19.0905 5.26196 19.0545 4.11162 18.6 3.1C18.6 3.1 17.5 2.8 15.1 4.4C13.0672 3.87058 10.9328 3.87058 8.9 4.4C6.5 2.8 5.4 3.1 5.4 3.1C4.94548 4.11162 4.90953 5.26196 5.3 6.3C4.46745 7.15731 4.00122 8.30496 4 9.5C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21", stroke="#6774E4", stroke-width="2", stroke-linecap="round", stroke-linejoin="round")

  a(href="mailto:jerry7722@hotmail.com", title="JJ's mailbox")
    h5
      span.highlighter {{ $t('nav.getInTouch') }}
  .lang-switch
    a
      span.highlighter(@click="setLang('zh-TW')", :class="{ active: $i18n.locale === 'zh-TW' }") 中文
    span /
    a
      span.highlighter(@click="setLang('en')", :class="{ active: $i18n.locale === 'en' }") En
</template>

<script>
import Headroom from 'headroom.js/dist/headroom.js'

export default {
  data: () => {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initHeadroom()
    })
  },
  methods: {
    initHeadroom () {
      var myElement = document.querySelector('nav');
      var headroom  = new Headroom(myElement, {
        tolerance : {
          up : 5,
          down : 0
        }
      })
      headroom.init(
      )
    },
    setLang (lang) {
      this.$i18n.locale = lang
    }
  },
  components: {
    Headroom
  }
}
</script>

<style lang="scss" scoped>

@use '@/assets/scss/_variables' as *;
@use '@/assets/scss/_global' as *;

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(255,255,255, .98);
  padding: 0 5%;
  width: 100%; height: 54px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}
h4 {
  font: 1.125rem/54px $header;
  color: $text-prime;
  margin-right: 2rem;
  text-transform: uppercase;
}
p {
  line-height: 54px;
  color: $text-third;
}
.github {
  width: 54px; height: 54px;
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

h5 {
  line-height: 54px;
  color: $link;
  margin: 0 0 0 1.5vw;
}
.lang-switch {
  margin-left: 2rem;
  display: flex;
  align-items: center;
  font: 1rem/54px $body;
  color: $link;
  a {
    padding: 0 0.25rem;
    cursor: pointer;
    color: $link;
    
    &:hover {
      font-weight: bold;
    }
    .active::after {
      transform: scaleX(1);
    }
  }
}
nav .highlighter::after {
  top: 70%;
}
@media (max-width: 960px) {
  p {
    display: none;
  }
}
@media (max-width: 500px) {
  nav {
    padding: 0 5%;
  }
  h4 {
    font-size: 1rem;
    margin-right: 0;
  }
  h5 {
    font-size: 1rem;
  }
}
// HEADROOM

.headroom {
  will-change: transform;
  box-shadow: 0px 1px 10px  hsla(260,45%,35%, .15);
  transition: transform .2s cubic-bezier(.25, .46, .45, .94);
}
.headroom--unpinned {
  transform: translate3d(0, 55px, 0);
}
.headroom--pinned {
  transform: translate3d(0, 0, 0);
}
.expanded.headroom--top {
  transform: translate3d(0, -12px, 0);
  box-shadow: none;
}
</style>
