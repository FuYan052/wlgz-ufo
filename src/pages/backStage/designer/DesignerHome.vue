<template>
  <!-- 设计师首页 -->
  <div class="designerHome">
    <div class="projectCate">
      <div class="cateWrap">
        <div class="title" @click="showCurrPro">进行中项目<span><i class="el-icon-arrow-right" v-show="isRight1"></i><i v-show="isDown1" class="el-icon-arrow-down"></i></span></div>
        <ul class="currPro" v-show="isShowCurrPro">
          <li v-for="(item,index) in 3" :key="index" @click="toProject">
            <span class="number">1</span>
            <span class="proName">华丽天辰<span class="icon">></span></span>
          </li>
        </ul>
      </div>
      <div class="cateWrap">
        <div class="title" @click="showHisPro">历史项目<span><i class="el-icon-arrow-right" v-show="isRight2"></i><i v-show="isDown2" class="el-icon-arrow-down"></i></span></div>
        <ul class="historyPro" v-show="isShowHisPro">
          <li v-for="(item,index) in 5" :key="index" @click="toProject">
            <span class="proName">华丽天辰</span>
            <span class="icon">></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignerHome',
  data() {
    return {
      isShowCurrPro: false,
      isShowHisPro: false,
      isRight1: true,  //控制箭头方向
      isDown1: false,  //控制箭头方向
      isRight2: true,  //控制箭头方向
      isDown2: false,  //控制箭头方向
    }
  },
  created() {
    // this.$http.getDesignerPro().then(resp => {
    //   console.log(resp)
    //   if(resp.status === 200) {

    //   }
    // })
  },
  methods: {
    showCurrPro() {
      this.isShowCurrPro = !this.isShowCurrPro
      this.isRight1 = !this.isRight1
      this.isDown1 = !this.isDown1
    },
    showHisPro() {
      this.isShowHisPro = !this.isShowHisPro
      this.isRight2 = !this.isRight2
      this.isDown2 = !this.isDown2
    },
    toProject() {
      this.$router.push({
        path: '/designerProject'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .designerHome{
    width: 100%;
    .projectCate{
      width: 100%;
      .cateWrap{
        width: 100%;
        height: auto;
        .title{
          width: 100%;
          height: 100px;
          border-top: 1px solid #c7c6c6;
          border-bottom: 1px solid #c7c6c6;
          background: #daf5f5;
          font-size: 25px;
          line-height: 100px;
          padding: 0 40px;
          span{
            float: right;
          }
        }
        .currPro{
          width: 100%;
          height: auto;
          padding-bottom: 20px;
          li{
            width: 100%;
            height: 80px;
            margin-top: 20px;
            font-size: 26px;
            .number{
              display: block;
              width: 72px;
              height: 80px;
              line-height: 80px;
              text-align: center;
              border: 1px solid #ffcccc;
              float: left;
            }
            .proName{
              display: block;
              width: 650px;
              height: 80px;
              border: 1px solid #ffcccc;
              line-height: 80px;
              float: right;
              padding-left: 18px;
              padding-right: 40px;
              .icon{
                float: right;
              }
            }
          }
        }
        .historyPro{
          width: 100%;
          height: auto;
          padding-bottom: 20px;
          li{
            width: 100%;
            height: 80px;
            margin-top: 20px;
            font-size: 26px;
            border: 1px solid #ffcccc;
            padding: 0 40px;
            .proName{
              line-height: 80px;
            }
            .icon{
              float: right;
              line-height: 80px;
            }
          }
        }
      }
    }
  }
</style>

