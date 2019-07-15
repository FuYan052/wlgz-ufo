<template>
<!-- 项目概况 -->
  <div class="projectOverview">
    <ul>
      <li>
        项目名称：<span>天禧广场</span>
      </li>
      <li>
        负责人：<span>张雨晨</span>
      </li>
      <li>
        手机号：<span>12354624536</span>
      </li>
      <li>
        项目地区：<span>四川省成都市高新区</span>
      </li>
      <li>
        详细地址：<span>益州大道555号星辰国际B座1503</span>
      </li>
      <li>
        投资公司：<span>海洋科技发展有限公司</span>
      </li>
      <li>
        项目面积：<span>243.5㎡</span>
      </li>
      <li>
        项目工期：<span>2109.10.7-2019.11.30</span>
      </li>
      <li>
        合同造价：<span>3200,000.00</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectOverview',
  data() {
    return {
      proOverview: {}
    }
  },
  created() {
    // this.$http.getProOverview().then(resp => {
    //   console.log(resp)
    //   if(resp.status === 200) {
    //     this.proOverview = resp.data
    //   }
    // })
  }
}
</script>

<style lang="scss" scoped>
  .projectOverview{
    width: 100%;
    min-height: 100vh;
    background: #e7e7e7;
    ul{
      width: 100%;
      height: auto;
      li{
        width: 100%;
        height: 90px;
        padding: 0 25px;
        font-size: 26px;
        line-height: 90px;
        border-bottom: 1px solid #cdcdcd;
        span{
          float: right;
        }
      }
    }
  }
</style>
