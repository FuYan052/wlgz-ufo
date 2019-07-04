<template>
  <div class="projectHome">
    <ul>
      <li>
        <h3 @click="addDailyReport">添加日报</h3>
        <h3 @click="checkDailyReport">查看日报</h3>
      </li>
      <li>
        <h3 @click="addWeeklyReport">添加周报</h3>
        <h3 @click="checkWeeklyReport">查看周报</h3>
      </li>
      <li>
        <h3 @click="projectOverview">项目概况</h3>
        <h3 @click="teamInformation">班组信息</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectHome',
  methods:{
    addDailyReport() {
      this.$router.push({
        path: '/project/addDailyReport'
      })
    },
    checkDailyReport() {
      this.$router.push({
        path: '/project/checkDailyReport'
      })
    },
    addWeeklyReport() {
      this.$router.push({
        path: '/project/addWeeklyReport'
      })
    },
    checkWeeklyReport() {
      this.$router.push({
        path: '/project/checkWeeklyReport'
      })
    },
    projectOverview() {
      this.$router.push({
        path: '/project/projectOverview'
      })
    },
    teamInformation() {
      this.$router.push({
        path: '/project/teamInformation'
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  .projectHome{
    width: 100%;
    height: 100vh;
    background: #e7e7e7;
    ul{
      width: 100%;
      height: auto;
      li{
        width: 100%;
        height: 200px;
        background: #fff;
        margin-bottom: 35px;
        h3{
          width: 100%;
          height: 100px;
          padding-left: 45px;
          line-height: 100px;
          font-size: 26px;
          border: 1px solid #686868;
        }
      }
    }
  }
</style>

