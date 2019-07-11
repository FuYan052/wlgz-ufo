import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserCenter from '@/pages/UserCenter'
import OwnerProject from '@/pages/OwnerProject'
import TeamInfo from '@/pages/TeamInfo'
import Drawing from '@/pages/Drawing'
import Control from '@/pages/Control'
import MaterialTrack from '@/pages/MaterialTrack'
import IntelligentOffice from '@/pages/IntelligentOffice'
import ShowToDoList from '@/pages/ShowToDoList'
import News from '@/pages/News'
// import UserInfo from '@/pages/UserInfo'
import WeeklyReport from '@/pages/WeeklyReport'
import DailyReport from '@/pages/DailyReport'
import Attendance from '@/pages/Attendance'
import BackstageHome from '@/pages/backStage/BackstageHome'
import Login from '@/pages/backStage/Login'
import ManagerHome from '@/pages/backStage/manager/ManagerHome'
import ProjectHome from '@/pages/backStage/manager/ProjectHome'
import AddDailyReport from '@/pages/backStage/manager/AddDailyReport'
import CheckDailyReport from '@/pages/backStage/manager/CheckDailyReport'
import AddWeeklyReport from '@/pages/backStage/manager/AddWeeklyReport'
import CheckWeeklyReport from '@/pages/backStage/manager/CheckWeeklyReport'
import ProjectOverview from '@/pages/backStage/manager/ProjectOverview'
import TeamInformation from '@/pages/backStage/manager/TeamInformation'
import Material from '@/pages/backStage/manager/Material'
import ToDoList from '@/pages/backStage/manager/ToDoList'
import DesignerHome from '@/pages/backStage/designer/DesignerHome'
import Project from '@/pages/backStage/designer/Project'
import AddState from '@/pages/backStage/designer/AddState'

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
      path: '/ownerProject',
      name: 'OwnerProject',
      component: OwnerProject
    },
    {
      path: '/teamInfo',
      name: 'TeamInfo',
      component: TeamInfo
    },
    {
      path: '/drawing',
      name: 'Drawing',
      component: Drawing
    },
    {
      path: '/control',
      name: 'Control',
      component: Control
    },
    {
      path: '/materialTrack',
      name: 'MaterialTrack',
      component: MaterialTrack
    },
    {
      path: '/intelligentOffice',
      name: 'IntelligentOffice',
      component: IntelligentOffice
    },
    {
      path: '/showToDoList',
      name: 'ShowToDoList',
      component: ShowToDoList
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    // {
    //   path: '/userInfo',
    //   name: 'UserInfo',
    //   component: UserInfo
    // },
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
    },
    {
      path: '/managerHome',
      name: 'ManagerHome',
      component: ManagerHome
    },
    {
      path: '/project',
      name: 'ProjectHome',
      component: ProjectHome,
    },
    {
      path: '/project/addDailyReport',
      name: 'AddDailyReport',
      component: AddDailyReport
    },
    {
      path: '/project/checkDailyReport',
      name: 'CheckDailyReport',
      component: CheckDailyReport
    },
    {
      path: '/project/addWeeklyReport',
      name: 'AddWeeklyReport',
      component: AddWeeklyReport
    },
    {
      path: '/project/checkWeeklyReport',
      name: 'CheckWeeklyReport',
      component: CheckWeeklyReport
    },
    {
      path: '/project/projectOverview',
      name: 'ProjectOverview',
      component: ProjectOverview
    },
    {
      path: '/project/teamInformation',
      name: 'TeamInformation',
      component: TeamInformation
    },
    {
      path: '/project/material',
      name: 'Material',
      component: Material
    },
    {
      path: '/project/toDoList',
      name: 'ToDoList',
      component: ToDoList
    },
    {
      path: '/designerHome',
      name: 'DesignerHome',
      component: DesignerHome
    },
    {
      path: '/designerProject',
      name: 'Project',
      component: Project
    },
    {
      path: '/designerProject/addState',
      name: 'AddState',
      component: AddState
    },
  ]
})
