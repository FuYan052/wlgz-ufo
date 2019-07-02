import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserCenter from '@/pages/UserCenter'
import UserInfo from '@/pages/UserInfo'
import WeeklyReport from '@/pages/WeeklyReport'
import DailyReport from '@/pages/DailyReport'
import Attendance from '@/pages/Attendance'
import BackstageHome from '@/pages/backStage/BackstageHome'
import Login from '@/pages/backStage/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/userCenter',
    },
    {
      path: '/userCenter',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/weeklyReport',
      name: 'WeeklyReport',
      component: WeeklyReport
    },
    {
      path: '/dailyReport',
      name: 'DailyReport',
      component: DailyReport
    },
    {
      path: '/attendance',
      name: 'Attendance',
      component: Attendance
    },
    {
      path: '/backstageHome',
      name: 'BackstageHome',
      component: BackstageHome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
