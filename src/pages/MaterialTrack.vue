<template>
  <!-- 材料追踪 -->
  <div class="materialTrack" v-title data-title="材料追踪">
    <div v-for="(item,index) in 4" :key="index" v-show="hasProject">
      <h4 class="m-title" @click="changeShow(index)">
        实木地板<span><b class="el-icon-arrow-right" v-show="index !== j"></b><b v-show="index === j" class="el-icon-arrow-down"></b></span>
      </h4>
      <div class="m-detail" v-show="index === j">
        <h5>
          品牌规格：<span>圣象面漆地板900*80*18（富彬牌）</span>
        </h5>
        <h5>
          单位：<span>㎡</span>
        </h5>
        <h5>
          数量：<span>31.3</span>
        </h5>
        <h5>
          单价：<span>787元</span>
        </h5>
        <h5>
          总价：<span>24633.1元</span>
        </h5>
        <h5>
          所用部位：<span>总裁办公室</span>
        </h5>
        <h5>
          到货时间：<span class="date">
            2018-08-16
          </span>
        </h5>
        <h5>
          到货照片：<span class="image">
            <img src="../assets/logo.png" alt="">
            <img src="../assets/logo.png" alt="">
            <img src="../assets/logo.png" alt="">
            <img src="../assets/logo.png" alt="">
            <img src="../assets/logo.png" alt="">
            <img src="../assets/logo.png" alt="">
          </span>
        </h5>
      </div>
    </div>
    <!-- 当没有项目时 -->
    <div class="emptyBox" v-show="!hasProject">
      <div class="noProject" v-show="!hasProject">
        <h6>您还没有项目哦！</h6>
        <div class="consultation">
          马上咨询
        </div>
      </div>
      <div class="clearance"></div>
      <div class="imgBox">
        <img src="../assets/touxiang.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaterialTrack',
  data() {
    return {
      isShowDetail: false,
      j: -1,
      hasProject: false
    }
  },
  methods: {
    changeShow(index) {
      this.isShowDetail = !this.isShowDetail
      if(this.isShowDetail){
        this.j = index
      }
      if(!this.isShowDetail){
        this.j = -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .materialTrack{
    width: 100%;
    height: auto;
    .m-title{
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
    .m-detail{
      width: 100%;
      height: auto;
      padding-bottom: 40px;
      h5{
        width: 100%;
        font-size: 26px;
        margin-top: 30px;
        padding-left: 60px;
        span{
          padding-left: 40px;
        }
        .date{
          display: inline-block;
          width: 450px;
          height: 50px;
        }
        .image{
          display: block;
          width: 670px;
          margin-left: -20px;
          margin-top: 37px;
          img{
            width: 120px;
            height: 120px;
            display: inline-block;
            margin-right: 30px;
          }
        }
      }
    }
    //当没有项目时
    .emptyBox{
      width: 100%;
      min-height: 100vh;
      background: #f0f0f0;
      overflow: hidden;
      .noProject{
        width: 100%;
        height: 200px;
        h6{
          font-size: 34px;
          text-align: center;
          margin-top: 105px;
        }
        .consultation{
          width: 210px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-size: 25px;
          background: #fff;
          border: 1px solid #0368cd;
          border-radius: 15px;
          margin: 0 auto;
          margin-top: 40px;
        }
      }
      .clearance{
      width: 100%;
      height: 20px;
      background: #e3e3e3;
      }
      .imgBox{
        width: 100%;
        padding: 50px 40px;
        img{
          width: 100%;
        }
      }
    }
  }
</style>

