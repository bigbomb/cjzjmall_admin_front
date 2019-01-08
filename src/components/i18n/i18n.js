import Vue from 'vue'
import locale from 'element-ui/lib/locale';
import VueI18n from 'vue-i18n'
import en from './en'
import cn from './zhCHS'
import es from './es'
Vue.use(VueI18n)

const messages = {
  en: en,
  cn: cn,
  es: es
}

const i18n = new VueI18n({
  locale: 'es', // 设置默认语言
  messages
})
locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换

export default i18n