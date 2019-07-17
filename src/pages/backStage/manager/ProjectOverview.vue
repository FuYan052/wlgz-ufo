<template>
<!-- 项目概况 -->
  <div class="projectOverview">
    <ul>
      <li>
        项目名称：<span>{{proOverview.projectName}}</span>
      </li>
      <li>
        负责人：<span>{{proOverview.dutyName}}</span>
      </li>
      <li>
        手机号：<span>{{proOverview.phone}}</span>
      </li>
      <li>
        项目地区：<span>{{proOverview.projectArea}}</span>
      </li>
      <li>
        详细地址：<span>{{proOverview.address}}</span>
      </li>
      <li>
        投资公司：<span>{{proOverview.investmentCompany}}</span>
      </li>
      <li>
        项目面积：<span>{{proOverview.region}}㎡</span>
      </li>
      <li>
        项目工期：<span>{{proOverview.startTime}}至{{proOverview.endTime}}</span>
      </li>
      <li>
        合同造价：<span>{{proOverview.contractCost}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProjectOverview',
  data() {
    return {
      proOverview: {},
      // startTime: '',
      // endTime: ''
    }
  },
  computed: {
    ...mapState(["projectId"]),
  },
  created() {
    this.$http.getProOverview(this.projectId).then(resp => {
      console.log(resp)
      if(resp.status === 200) {
        this.proOverview = resp.data
      }
    })
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
