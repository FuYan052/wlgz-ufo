<template>
  <div class="userCenter">
    <div class="userInfo">
      <div class="userPic">
        <img src="../assets/touxiang.jpg" alt="">
      </div>
      <div class="userName">
        <p>{{userName}}</p>
      </div>
    </div>
    <ul class="menuList">
      <li @click="toUserInfo">个人信息<span><i class="el-icon-arrow-right"></i></span></li>
      <li  @click="toWeeklyReport">装修报告<span><i class="el-icon-arrow-right"></i></span></li>
      <li @click="toDailyReport">装修日志<span><i class="el-icon-arrow-right"></i></span></li>
      <li @click="toAttendance">出勤情况<span><i class="el-icon-arrow-right"></i></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  data() {
    return{
      userName: '张星宇'
    }
  },
  methods: {
    toUserInfo() {
      this.$router.push({
        path: '/userInfo'
      })
    },
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .userCenter{
    .userInfo{
      width: 100%;
      height: 212px;
      .userPic{
        width: 28.2%;
        height: 100%;
        float: left;
        background: #e6e5ee;
        position: relative;
        img{
          width: 186px;
          height: 186px;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
      }
      .userName{
        width: 71.8%;
        height: 100%;
        float: left;
        background: #818bc0;
        p{
          color: #f5f5fb;
          font-size: 34px;
          margin-left: 34px;
          margin-top: 90px;
        }
      }
    }
    .menuList{
      width: 100%;
      height: 380px;
      margin-top: 20px;
      li{
        width: 100%;
        height: 25%;
        padding-left: 134px;
        font-size: 28px;
        line-height: 91px;
        background: #f0f0f0;
        border-top: 1px solid #d1d1d1;
        border-bottom: 1px solid #d1d1d1;
        cursor: pointer;
        span{
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

