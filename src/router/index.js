import Vue from 'vue'
import Router from 'vue-router'
import Search from 'components/search/search'
import PartnerDetail from 'components/partner-detail/partner-detail'
import Mine from 'components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/search'
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      children: [
        {
          path: ':id',
          component: PartnerDetail
        }
      ]
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      children: [
        {
          path: ':id',
          component: PartnerDetail
        }
      ]
    }
  ]
})
