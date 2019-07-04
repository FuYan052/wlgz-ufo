<template>
  <div class="addWeeklyReport">
    <div class="title1">装修情况:</div>
    <div class="addTeaxarea">
      <text-area  v-on:childByValue="childByValue1"></text-area>
    </div>
    <div class="title2">完成比例:</div>
    <div class="percentBox">
      <!-- <div class="progress">
        <div class="progress-bar progress-bar-success" style="width: 35%">
          <span class="sr-only">35% Complete (success)</span>
        </div>
        <div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 20%">
          <span class="sr-only">20% Complete (warning)</span>
        </div>
        <div class="progress-bar progress-bar-danger" style="width: 10%">
          <span class="sr-only">10% Complete (danger)</span>
        </div>
      </div> -->
    </div>
    <div class="title3">综合评价:</div>
    <div class="addTeaxarea">
      <text-area  v-on:childByValue="childByValue2"></text-area>
    </div>
    <div class="title4">现场照片:</div>
    <div class="picBox">

    </div>
    <div class="submitBtn">
      提交
    </div>
  </div>
</template>

<script>
import TextArea from '../../../components/TextArea'
export default {
  name: 'AddWeeklyReport',
  components: {
    TextArea
  },
  data() {
    return {
      weeklyText1: '',
      weeklyText2: '',
    }
  },
  created() {
    // console.log($)
  },
  methods: {
    childByValue1(childValue) {
      this.weeklyText1 = childValue
      // console.log(this.weeklyText1)
    },
    childByValue2(childValue) {
      this.weeklyText2 = childValue
      // console.log('综合评价：'+ this.weeklyText2)
    },
  }
}
</script>

<style lang="scss" scoped>
  .addWeeklyReport{
    width: 100%;
    height: auto;
    background: #e7e7e7;
    padding: 0 20px;
    padding-bottom: 100px;
    .title1{
      width: 100%;
      height: 110px;
      line-height: 110px;
      padding-left: 20px;
      font-size: 36px;
    }
    .addTeaxarea{
      width: 100%;
    }
    .title2{
      width: 100%;
      padding-left: 20px;
      font-size: 36px;
      margin-top: 60px;
      margin-bottom: 25px;
    }
    .percentBox{
      width: 100%;
      height: 120px;
      border: 1px solid red;
    }
    .title3{
      width: 100%;
      height: 110px;
      line-height: 110px;
      padding-left: 20px;
      font-size: 36px;
    }
    .title4{
      width: 100%;
      height: 110px;
      line-height: 110px;
      padding-left: 20px;
      font-size: 36px;
    }
    .picBox{
      width: 100%;
      min-height: 173px;
      background: #fff;
      padding: 30px 20px;
      padding-right: 0;
    }
    .submitBtn{
      width: 410px;
      height: 90px;
      margin: 0 auto;
      margin-top: 100px;
      font-size: 34px;
      color: #fff;
      line-height: 90px;
      text-align: center;
      background: #1aad19;
      border-radius: 10px;
    }
  }
</style>
