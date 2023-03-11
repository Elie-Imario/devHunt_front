import { createRouter, createWebHashHistory } from 'vue-router'

import AppSidebar from '../layout/main-dashboard/AppSidebar.vue'

/*Starter*/
import navBar from '../layout/starter/navBar.vue'
import footer_ from '../layout/starter/footer_.vue'
import landingVue from '../views/starter/landingPage.vue'

/*Admin*/
import dataView from '../views/admin-dashboard/dataView.vue'
import userList from '../views/admin-dashboard/userlistview.vue'
import addUserView from '../views/admin-dashboard/addUserView.vue'
import userProfilView from '../views/admin-dashboard/userProfil.vue'
import generalInfoView from '../views/admin-dashboard/generalInfoView.vue'

/*ALL User*/
import homeView from '../views/all-user-views/homeView.vue'
import sharingView from '../views/all-user-views/sharingView.vue'
import exchangeView from '../views/all-user-views/exchangeView.vue'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    components: {
      topheader: navBar,
      default: landingVue,
      footer: footer_
    }
  },

  /* ADMIN */
  {
    path: '/dashboard/data',
    name: 'datalink',
    components: {
        sidebar: AppSidebar,
        default: dataView,
    }
  },
  {
    path: '/dashboard/userlist',
    name: 'userlistlink',
    components: {
        sidebar: AppSidebar,
        default: userList,
    }
  },
  {
    path: '/dashboard/userlist/add',
    name: 'adduserlink',
    components: {
        sidebar: AppSidebar,
        default: addUserView,
    }
  },
  
  {
    path: '/dashboard/generalInfo',
    name: 'generalInfolink',
    components: {
        sidebar: AppSidebar,
        default: generalInfoView,
    }
  },
  /* ALL USER */
  {
    path: '/dashboard/home',
    name: 'dashboardhomelink',
    components: {
        sidebar: AppSidebar,
        default: homeView,
    }
  },
  {
    path: '/dashboard/sharingView',
    name: 'sharinglink',
    components: {
        sidebar: AppSidebar,
        default: sharingView,
    }
  },
  {
    path: '/dashboard/views/question/:id',
    name: 'exchangelink',
    components: {
        sidebar: AppSidebar,
        default: exchangeView,
    }
  },{
    path: '/dashboard/userProfil',
    name: 'userProfillink',
    components: {
        sidebar: AppSidebar,
        default: userProfilView,
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  
})

export default router
