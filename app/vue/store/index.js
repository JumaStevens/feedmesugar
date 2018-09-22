import Vue from 'vue'
import Vuex from 'vuex'

// modules
import error from './modules/error'
import app from './modules/app'
import auth from './modules/auth'
import catalog from './modules/catalog'
import checkout from './modules/checkout'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    error,
    app,
    auth,
    catalog,
    checkout
  },
  strict: process.env.NODE_ENV !== 'production'
})
