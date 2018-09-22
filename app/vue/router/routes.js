import Index from '~/views/Index.vue'
import Auth from '~/views/Auth.vue'
import Account from '~/views/Account.vue'
import Product from '~/views/Product.vue'
import Collection from '~/views/Collection.vue'
import Cart from '~/views/Cart.vue'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/collection/:id',
    name: 'collection',
    component: Collection
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]
