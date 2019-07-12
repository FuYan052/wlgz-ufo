<template>
  <!-- 施工管控 -->
  <div class="control" v-title data-title="施工管控">
    <ul class="menuList">
      <li @click="toWeeklyReport"><span id="icon"><i class="el-icon-tickets"></i></span>装修报告<span><i class="el-icon-arrow-right"></i></span></li>
      <li @click="toDailyReport"><span id="icon"><i class="el-icon-edit-outline"></i></span>装修日志<span><i class="el-icon-arrow-right"></i></span></li>
      <li @click="toAttendance"><span id="icon"><i class="el-icon-user-solid"></i></span>出勤情况<span><i class="el-icon-arrow-right"></i></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Control',
  methods: {
    toWeeklyReport() {
      this.$router.push({
        path: '/weeklyReport'
      })
    },
    toDailyReport() {
      this.$router.push({
        path: '/dailyReport'
      })
    },
    toAttendance() {
      this.$router.push({
        path: '/attendance'
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  .control{
    width: 100%;
    .menuList{
      width: 100%;
      height: 380px;
      li{
        width: 100%;
        height: 25%;
        padding-left: 45px;
        font-size: 28px;
        line-height: 91px;
        background: #f0f0f0;
        border-top: 1px solid #d1d1d1;
        border-bottom: 1px solid #d1d1d1;
        cursor: pointer;
        #icon{
          padding-right: 30px;
          font-size: 46px;
          line-height: 91px;
          color: #cccccc;
          display: block;
          float: left;
        }
        span:nth-of-type(2){
          width: 85px;
          height: 100%;
          font-size: 28px;
          line-height: 91px;
          text-align: center;
          font-weight: bold;
          float: right;
          color: #676767;
        }
      }
    }
  }
</style>

