<template>
<!-- 业主项目概况 -->
  <div class="ownerProject">
    <ul>
      <li>
        项目名称：<span>{{proInfo.projectName}}</span>
      </li>
      <li>
        负责人：<span>{{proInfo.dutyName}}</span>
      </li>
      <li>
        手机号：<span>{{proInfo.phone}}</span>
      </li>
      <li>
        项目地区：<span>{{proInfo.projectArea}}</span>
      </li>
      <li>
        详细地址：<span>{{proInfo.address}}</span>
      </li>
      <li>
        投资公司：<span>{{proInfo.investmentCompany}}</span>
      </li>
      <li>
        项目面积：<span>{{proInfo.region}}㎡</span>
      </li>
      <li>
        项目工期：<span>{{proInfo.startTime}}至{{proInfo.endTime}}</span>
      </li>
      <li>
        合同造价：<span>{{proInfo.contractCost}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'OwnerProject',
  data() {
    return {
      proInfo: '',
      // startTime: '',
      // endTime: ''
    }
  },
  computed: {
    ...mapState(["projectId"]),
  },
  created() {
    this.$http.getOwnerPro(this.projectId).then(resp => {
      console.log(resp)
      if(resp.status === 200) {
        this.proInfo = resp.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .ownerProject{
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
