import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import router from '~/router'



const isProd = process.env.NODE_ENV === 'production'


Vue.use(VueAnalytics, {
  id: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})
