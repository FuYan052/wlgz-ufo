<template>
  <div class="userCenter">
    <div class="userInfo">
      <div class="userPic">
        <img preview="0" preview-text="" src="../assets/touxiang.jpg" alt="">
      </div>
      <div class="userName">
        <p>{{userName}}</p>
      </div>
      <div class="loginBox" v-show="!isLogin">
        <p>登录手机号，查看装修进度及情况</p>
        <span @click="toLogin">登录</span>
      </div>
    </div>
    <div class="newMessage" v-show="isLogin">
      <div class="toDoList" @click="showToDoList">
        <h5>2</h5>
        <p>待办事项</p>
      </div>
      <div class="message" @click="toNews">
        <h5>2</h5>
        <p>最新消息</p>
      </div>
    </div>
    <ul class="menuList">
      <li @click="toOwnerProject"><span id="icon"><i class="el-icon-s-order"></i></span>项目概况<span><i class="el-icon-arrow-right"></i></span></li>
      <li @click="toTeamInfo"><span id="icon"><i class="el-icon-user-solid"></i></span>班组信息<span><i class="el-icon-arrow-right"></i></span></li>
      <li @click="toDrawing"><span id="icon"><i class="el-icon-picture"></i></span>设计出图<span><i class="el-icon-arrow-right"></i></span></li>
      <li @click="toControl"><span id="icon"><i class="el-icon-s-check"></i></span>施工管控<span><i class="el-icon-arrow-right"></i></span></li>
      <li @click="toMaterialTrack"><span id="icon"><i class="el-icon-s-claim"></i></span>材料追踪<span><i class="el-icon-arrow-right"></i></span></li>
      <li @click="toIntelligentOffice"><span id="icon"><i class="el-icon-s-platform"></i></span>智能办公<span><i class="el-icon-arrow-right"></i></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  data() {
    return{
      userName: '小丸子',
      isLogin: false
    }
  },
  methods: {
    toLogin() {
      this.$router.push({
        path: '/login'
      })
    },
    showToDoList() {
      this.$router.push({
        path: '/showToDoList'
      })
    },
    toNews() {
      this.$router.push({
        path: '/news'
      })
    },
    toOwnerProject() {
      this.$router.push({
        path: '/ownerProject'
      })
    },
    toTeamInfo() {
      this.$router.push({
        path: '/teamInfo'
      })
    },
    toDrawing() {
      this.$router.push({
        path: '/drawing'
      })
    },
    toControl() {
      this.$router.push({
        path: '/control'
      })
    },
    toMaterialTrack() {
      this.$router.push({
        path: '/materialTrack'
      })
    },
    toIntelligentOffice() {
      this.$router.push({
        path: '/intelligentOffice'
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  .userCenter{
    .userInfo{
      width: 100%;
      height: 355px;
      background: #818bc0;
      position: relative;
      .userPic{
        float: left;
        margin-top: 80px;
        margin-left: 40px;
        img{
          width: 125px;
          height: 125px;
          border-radius: 50%;
        }
      }
      .userName{
        float: left;
        p{
          color: #f5f5fb;
          font-size: 34px;
          margin-left: 34px;
          margin-top: 120px;
        }
      }
      .loginBox{
        width: 100%;
        height: 80px;
        padding-left: 20px;
        padding-right: 55px;
        position: absolute;
        bottom: 0;
        p{
          height: 80px;
          line-height: 80px;
          font-size: 26px;
          color: #fff;
          float: left;
        }
        span{
          display: block;
          float: right;
          width: 135px;
          height: 40px;
          color: #fff;
          font-size: 24px;
          line-height: 40px;;
          text-align: center;
          background: #33cc66;
          border-radius: 6px;
          margin-top: 20px;
        }
      }
    }
    .newMessage{
      width: 100%;
      height: 155px;
      margin-top: 20px;
      background: #f0f0f0;
      border-top: 1px solid #d1d1d1;
      border-bottom: 1px solid #d1d1d1;
      .toDoList{
        width: 300px;
        height: 155px;
        float: left;
        h5{
          margin-top: 30px;
          text-align: center;
        }
        p{
          text-align: center;
          margin-top: 25px;
          font-size: 25px;
          color: #9a9a9a;
        }
      }
      .message{
        width: 300px;
        height: 155px;
        float: right;
        h5{
          margin-top: 30px;
          text-align: center;
        }
        p{
          text-align: center;
          margin-top: 25px;
          font-size: 25px;
          color: #9a9a9a;
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

