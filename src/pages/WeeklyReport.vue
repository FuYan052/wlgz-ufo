<template>
  <!-- 装修周报 -->
  <div class="weeklyReport" v-title data-title="装修周报">
    <div v-for="(item,index) in weeklyReportList" :key="index">
      <div class="w-title" @click="changeShow(item,index)">
        {{item}}<span><i class="el-icon-arrow-right" v-show="index !== i"></i><i v-show="index === i" class="el-icon-arrow-down"></i></span>
      </div>
      <div class="w-detail" v-show="index === i">
        <p class="p p1">装修情况:</p>
        <div class="p1-detail">{{weeklyReportDetail.content}}</div>
        <p class="p p2">完成百分比:</p>
        <div class="p2-detail">
           <el-progress :percentage="percentage" :color="customColors"></el-progress>
        </div>
        <p class="p p3">出勤情况:</p>
        <div class="p3-detail">
          <vue-chart
            class="chart"
            type="bar"
            :data="chartData"
            :options="{scales: {yAxes: [{ticks: {beginAtZero: true}}]}}"
            :update-config="{duration: 800, easing: 'easeOutBounce'}"
          ></vue-chart>
        </div>
        <p class="p p4">综合评价:</p>
        <div class="p4-detail">
          {{weeklyReportDetail.overallEvaluate}}
        </div>
        <p class="p p5">现场图:</p>
        <div class="p5-detail">
          <div class="image" v-for="(item,index) in 4" :key="index">
            <img preview="10" src="../assets/touxiang.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueChart from 'vuechart';
import { mapState } from 'vuex'
export default {
  name: 'WeeklyReport',
  components: {
    VueChart,
  },
  data() {
    return {
      isShow: false,
      i: -1,
      weeklyReportList: '',
      weeklyReportDetail: '',
      percentage: 30,
      customColors: [
        {color: '#f22e2e', percentage: 40},
        {color: '#e6a23c', percentage: 80},
        {color: '#5cb87a', percentage: 100},
      ],
      chartData: {
        // labels: ['6/7', '6/8', '6/9','6/10', '6/11','6/12', '6/13'],
        labels: [],
        datasets: [
            {
                label: '一周出勤',
                // data: [4, 7, 10, 6, 5, 8, 3],
                data: [],
                backgroundColor: '#fc8d52',
                pointBorderColor: 'white',
            }
        ]
      }
    }
  },
  computed: {
    ...mapState(["projectId"]),
  },
  created() {
    this.$http.getWeeklyReportList(this.projectId).then(resp => {
      // console.log(resp)
      if(resp.status === 200) {
        this.weeklyReportList = resp.data
      }
    })
  },
  methods: {
    changeShow(item,index) {
      const params = {
        projectId: this.projectId,
        date: item
      }
      this.isShow = !this.isShow
      if(this.isShow){
        this.i = index
        this.$http.getWeeklyReportDetail(params).then(resp => {
          console.log(resp)
          this.weeklyReportDetail = resp.data
          this.percentage = Number(resp.data.completionRate)
          this.chartData.labels = []
          this.chartData.datasets[0].data = []
          const list = resp.data.attendance
          for(let i=0;i<list.length;i++){
            this.chartData.labels.push(list[i].dailyTime)
            this.chartData.datasets[0].data.push(list[i].people)
          }
        })
      }
      if(!this.isShow){
        this.i = -1
        this.weeklyReportDetail = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .weeklyReport{
    width: 100%;
    height: auto;
    .w-title{
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
    .w-detail{
      width: 100%;
      height: auto;
      padding-left: 20px;
      font-size: 28px;
      .p{
        font-size: 28px;
        color: #696969;
      }
      .p1{
        padding: 24px 0;
      }
      .p1-detail{
        color: #121212;
      }
      .p2{
        padding-top: 24px;
      }
      .p2-detail{
        width: 100%;
        height: 115px;
      }
      .p3{
        padding-bottom: 24px;
      }
      .p3-detail{
        width: 100%;
        height: 300px;
        span{
          font-size: 36px;
          line-height: 40px;
        }
      }
      .p4{
        padding: 26px 0;
      }
      .p4-detail{
        color: #121212;
      }
      .p5{
        padding-top: 24px;
        padding-bottom: 36px;
      }
      .p5-detail{
        width: 100%;
        padding-right: 20px;
        padding-bottom: 24px;
        display: flex;
        justify-content: space-between;
        .image{
          width: 135px;
          height: 135px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
<style>
.weeklyReport .el-progress-bar{
  padding-right: 80px;
}
.weeklyReport .el-progress__text{
  float: right;
  margin-top: -28px;
}
.weeklyReport .el-progress{
  padding-top: 40px;
  width: 95%;
}
.weeklyReport .el-progress .el-progress-bar .el-progress-bar__outer{
  background-color: #fff;
  border: 2px solid #737373;
  height: 24px !important;
}
.p3-detail .chart{
  width: 85% !important;
}
</style>
