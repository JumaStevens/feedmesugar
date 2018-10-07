const Index = () => import('~/views/Index.vue')
const Auth = () => import('~/views/Auth.vue')
const Account = () => import('~/views/Account.vue')
const Product = () => import('~/views/Product.vue')
const Products = () => import('~/views/Products.vue')
const Collection = () => import('~/views/Collection.vue')
const Collections = () => import('~/views/Collections.vue')
const Cart = () => import('~/views/Cart.vue')
const Menu = () => import('~/views/Menu.vue')
const Search = () => import('~/views/Search.vue')
const Faq = () => import('~/views/Faq.vue')


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
