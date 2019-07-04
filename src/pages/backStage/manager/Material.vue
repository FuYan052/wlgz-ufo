<template>
<!-- 材料 -->
  <div class="material">
    <div v-for="(item,index) in 4" :key="index">
      <h4 class="m-title" @click="changeShow(index)">
        实木地板<span>></span>
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
          到货时间：<span class="date">date</span>
        </h5>
        <h5>
          到货照片：<span class="image"></span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Material',
  data() {
    return {
      isShowDetail: false,
      j: -1
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
  .material{
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
      padding-bottom: 70px;
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
          border: 1px solid paleturquoise;
        }
        .image{
          display: block;
          width: 670px;
          min-height: 170px;
          border: 1px solid #ededed;
          margin-left: -20px;
          margin-top: 37px;
        }
      }
    }
  }
</style>

