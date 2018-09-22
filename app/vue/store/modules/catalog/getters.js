export default {
  productDealOfTheDay (state) {
    const products = Object.values(state.products)
    return products.find(product => {
      return product.tags.find(tag => tag.value.match(/dealOfTheDay/i))
    })
  }

}
