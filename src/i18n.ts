import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

export default i18next

export function initI18n() {
  i18next.use(initReactI18next).init({
    // lng: getStorageValue('lang', 'en') as string,
    fallbackLng: 'en',
    ns: ['global'],
    resources: {},
  })
}

initI18n()

i18next.addResourceBundle('en', 'global', {
  menu: {
    homepage: 'Home',
  },
})

i18next.addResourceBundle('zh', 'global', {
  menu: {
    homepage: '首页',
  },
})
