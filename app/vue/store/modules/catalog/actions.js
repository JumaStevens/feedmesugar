import { shopifyClient } from '~/utils'


export default {
  async fetchProducts ({}) {
    try {
      const products = await shopifyClient.product.fetchAll()
      console.log('fetchProducts: ', products)
    }
    catch (e) {
      console.error(e)
    }
  }
}
