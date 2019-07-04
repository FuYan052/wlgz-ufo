<template>
  <!-- 项目经理首页 -->
  <div class="managerHome">
    <div class="projectCate">
      <div class="cateWrap">
        <div class="title" @click="showCurrPro">进行中项目<span>></span></div>
        <ul class="currPro" v-show="isShowCurrPro">
          <li v-for="(item,index) in 3" :key="index" @click="toProject">
            <span class="number">1</span>
            <span class="proName">华丽天辰<span class="icon">></span></span>
          </li>
        </ul>
      </div>
      <div class="cateWrap">
        <div class="title" @click="showHisPro">历史项目<span>></span></div>
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
  name: 'ManagerHome',
  data() {
    return {
      isShowCurrPro: false,
      isShowHisPro: false,
    }
  },
  methods: {
    showCurrPro() {
      this.isShowCurrPro = !this.isShowCurrPro
    },
    showHisPro() {
      this.isShowHisPro = !this.isShowHisPro
    },
    toProject() {
      this.$router.push({
        path: '/project'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .managerHome{
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

