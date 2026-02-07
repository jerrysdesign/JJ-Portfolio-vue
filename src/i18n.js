import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en.json'
import zhTW from './locales/zh-TW.json'

Vue.use(VueI18n)

const messages = {
    en: en,
    'zh-TW': zhTW
}

const i18n = new VueI18n({
    locale: 'zh-TW', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages // set locale messages
})

export default i18n
