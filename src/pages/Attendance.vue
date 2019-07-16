<template>
  <!-- 考勤情况 -->
  <div class="attendance" v-title data-title="出勤情况">
    <div v-for="(item,index) in attenList" :key="index">
      <div class="a-title" @click="changeDailyShow(item,index)">
        {{item}}<span><i class="el-icon-arrow-right" v-show="index !== i"></i><i v-show="index === i" class="el-icon-arrow-down"></i></span>
      </div>
      <div class="a-detail" v-show="index === i">
        <div class="item" v-for="(it,ind) in attenDetail" :key="ind">
          <div class="leftImg">
            <img preview="2" src="../assets/touxiang.jpg" alt="">
          </div>
          <div class="right">
            <p>
              工&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种：<span>{{it.type}}</span>
            </p>
            <p>
              进场时间：<span>{{it.approachTime}}</span>
            </p>
            <p>
              出场时间：<span>{{it.appearanceTime}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Attendance',
  data() {
    return {
      isShowAttendance: false,
      i: -1,
      attenList: '',  //考勤列表
      attenDetail: ''
    }
  },
  computed: {
    ...mapState(["projectId"]),
  },
  created() {
    this.$http.getAttendance(this.projectId).then(resp => {
      console.log(resp)
      if(resp.status === 200){
        this.attenList = resp.data
      }
    })
  },
  methods: {
    changeDailyShow(item,index) {
      this.isShowAttendance = !this.isShowAttendance
      const params = {
        projectId: this.projectId,
        date: item
      }
      if(this.isShowAttendance){
        this.i = index
        // 获取考勤详情
        this.$http.getAttendanceDetail(params).then(resp => {
          console.log(resp)
          if(resp.status === 200) {
            this.attenDetail = resp.data
          }
        })
      }
      if(!this.isShowAttendance){
        this.i = -1
        this.attenDetail = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .attendance{
    width: 100%;
    height: auto;
    .a-title{
      width: 100%;
      height: 90px;
      background: #f0f0f0;
      border-top: 1px solid #d0d0d0;
      border-bottom: 1px solid #d0d0d0;
      font-size: 28px;
      line-height: 90px;
      padding-left: 20px;
      padding-right: 45px;
      span{
        float: right;
      }
    }
    .a-detail{
      width: 100%;
      height: auto;
      background: #fff;
      .item{
        width: 92.4%;
        height: 194px;
        margin: 0 auto;
        border-bottom: 2px solid #e1e1e1;
        .leftImg{
          width: 150px;
          height: 150px;
          float: left;
          margin-left: 40px;
          margin-top: 20px;
          img{
            width: 150px;
            height: 150px;
            border-radius: 50%;
          }
        }
        .right{
          width: 460px;
          height: 100%;
          float: right;
          margin-left: 20px;
          padding-top: 15px;
          p{
            font-size: 28px;
            color: #212121;
            line-height: 55px;
            span{
              padding-left: 30px;;
            }
          }
        }
      }
    }
  }
</style>

