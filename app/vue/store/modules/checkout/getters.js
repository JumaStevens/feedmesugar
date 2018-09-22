import _ from 'lodash'


export default {
  lineItemsQuantityTotal (state) {
    return _.isEmpty(state) ? 0 : state.lineItems.reduce((acc, cur) => acc + cur.quantity, 0)
  }
}
