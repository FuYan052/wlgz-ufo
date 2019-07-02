<template>
  <!-- 装修日志 -->
  <div class="dailyReport" v-title data-title="装修日志">
    <div v-for="(item,index) in 4" :key="index">
      <div class="d-title" @click="changeDailyShow(index)">
        20190405<span>></span>
      </div>
      <div class="d-detail" v-show="index === j">
        <div class="imgBox">
          <div class="image" v-for="(item,index) in 8" :key="index">
            <img src="../assets/touxiang.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DailyReport',
  data() {
    return {
      isShowDaily: false,
      j: -1
    }
  },
  methods: {
    changeDailyShow(index) {
      this.isShowDaily = !this.isShowDaily
      if(this.isShowDaily){
        this.j = index
      }
      if(!this.isShowDaily){
        this.j = -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dailyReport{
    width: 100%;
    height: auto;
    .d-title{
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
    .imgBox{
      width: 100%;
      height: 375px;
      padding-top: 20px;
      .image{
        width: 125px;
        height: 125px;
        padding: 0 20px;
        display: inline-block;
        margin-left: 62px;
        margin-bottom: 45px;
        img{
          width: 125px;
          height: 125px;
        }
      }
      .image:nth-child(1){
        margin-left: 0;
      }
      .image:nth-child(5){
        margin-left: 0;
      }
    }
  }
</style>

