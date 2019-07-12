<template>
  <div class="userCenter">
    <div class="userInfo">
      <div class="userPic">
        <img preview="0" src="../assets/touxiang.jpg" alt="">
      </div>
      <div class="userName">
        <p>{{userName}}</p>
      </div>
      <div class="loginBox" v-show="!isLogin">
        <p>登录手机号，查看装修进度及情况</p>
        <span @click="toLogin">登录</span>
      </div>
      <!-- 登录之后显示当前项目 -->
      <el-select v-model="value" v-show="isLogin">
        <el-option
          v-for="item in projectList"
          :key="item.id"
          :label="item.name"
          :value="item.name">
        </el-option>
      </el-select>
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
    <!-- 弹框背景 -->
    <div class="bg" v-show="centerDialogVisible"></div>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>您还未开启项目，马上登录开启吧！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'UserCenter',
  data() {
    return{
      userName: '小丸子',
      centerDialogVisible: false,
      value: '选择项目',
      projectList: [
        {
          id: 1,
          name: '项目1'
        },
        {
          id: 2,
          name: '项目2'
        },
        {
          id: 3,
          name: '项目3'
        },
      ]
    }
  },
  computed: {
    ...mapState(["isLogin"]),
  },
  methods: {
    changeProject(e) {
      console.log(e)
      // this.currProject = project.name
    },
    sure() {
      this.centerDialogVisible = false
      this.$router.push({
        path: '/login'
      })
    },
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
      if(!this.isLogin) {
        this.centerDialogVisible = true
      }else{
        this.$router.push({
          path: '/ownerProject'
        })
      }
    },
    toTeamInfo() {
      if(!this.isLogin) {
        this.centerDialogVisible = true
      }else{
        this.$router.push({
          path: '/teamInfo'
        })
      }
    },
    toDrawing() {
      if(!this.isLogin) {
        this.centerDialogVisible = true
      }else{
        this.$router.push({
          path: '/drawing'
        })
      }
    },
    toControl() {
      if(!this.isLogin) {
        this.centerDialogVisible = true
      }else{
        this.$router.push({
          path: '/control'
        })
      }
    },
    toMaterialTrack() {
      if(!this.isLogin) {
        this.centerDialogVisible = true
      }else{
        this.$router.push({
          path: '/materialTrack'
        })
      }
    },
    toIntelligentOffice() {
      if(!this.isLogin) {
        this.centerDialogVisible = true
      }else{
        this.$router.push({
          path: '/intelligentOffice'
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .userCenter{
    width: 100%;
    min-height: 100vh;
    position: relative;
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
<style>
.userCenter .el-select{
  position: absolute;
  left: 40px;
  bottom: 30px;
}
.userCenter .el-select .el-input__suffix{
  display: none;
}
.userCenter input{
  font-size: 28px;
  color: #fff;
  letter-spacing: 3px;
  font-weight: bold;
  background: none;
  border: none;
  outline: none;
}
.userCenter .el-select .el-input{
  width: 200px;
}
.el-select .el-input.is-focus .el-input__inner{
  padding-right: 20px;
}
.el-popper[x-placement^=bottom] .popper__arrow:after{
  content: '';
}
.bg{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 20;
  outline: none;
  background: rgba(0,0,0,0.5)
}
.userCenter .el-dialog--center{
  width: 70% !important;
  margin-top: 380px !important;
}
.userCenter .el-dialog--center .el-dialog__body{
  padding-top: 80px;
  padding-bottom: 60px;
}
.userCenter .el-button--primary{
  background-color: #33cc66;
  border-color: #33cc66;
}
.userCenter .el-button{
  margin: 0 20px;
}
.userCenter .el-dialog--center .el-dialog__body{
  text-align: center
}
</style>

