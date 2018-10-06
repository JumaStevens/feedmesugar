import Index from '~/views/Index.vue'
import Auth from '~/views/Auth.vue'
import Account from '~/views/Account.vue'
import Product from '~/views/Product.vue'
import Products from '~/views/Products.vue'
import Collection from '~/views/Collection.vue'
import Collections from '~/views/Collections.vue'
import Cart from '~/views/Cart.vue'
import Menu from '~/views/Menu.vue'
import Search from '~/views/Search.vue'
import Faq from '~/views/Faq.vue'


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
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/collection/:id',
    name: 'collection',
    component: Collection
  },
  {
    path: '/collections',
    name: 'collections',
    component: Collections
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  }
]
