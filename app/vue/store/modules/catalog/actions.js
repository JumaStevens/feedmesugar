import { shopifyClient } from '~/utils'


export default {
  async fetchProducts ({ commit }) {
    try {
      const products = await shopifyClient.product.fetchAll()
      products.forEach(product => commit('SET_PRODUCTS', { product }))
      console.log('fetchProducts: ', products)
    }
    catch (e) {
      console.error(e)
    }
  }
}
