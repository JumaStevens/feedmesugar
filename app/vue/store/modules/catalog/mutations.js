import Vue from 'vue'

export default {
  SET_COLLECTIONS (state, { collection }) {
    Vue.set(state.collections, collection.id, collection)
  },


  SET_PRODUCTS (state, { product }) {
    console.log('SET_PRODUCTS: ', product)
    Vue.set(state.products, product.id, product)
  }
}
