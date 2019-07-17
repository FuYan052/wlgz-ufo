<template>
  <!-- 班组信息 -->
  <div class="teamInformation">
    <ul class="wrap1">
      <li>
        <h4>
          项目负责人：<span>{{teamInfo.project.dutyName}}</span>
        </h4>
        <h4>
          电话号码：<span>{{teamInfo.project.phone}}</span>
        </h4>
      </li>
      <li>
        <h4>
          设计：<span>{{teamInfo.designer.name}}</span>
        </h4>
        <h4>
          电话号码：<span>{{teamInfo.designer.phone}}</span>
        </h4>
      </li>
      <li>
        <h4>
          采购员：<span>{{teamInfo.buyer.name}}</span>
        </h4>
        <h4>
          电话号码：<span>{{teamInfo.buyer.phone}}</span>
        </h4>
      </li>
    </ul>
    <ul class="wrap2">
      <li>
        <h5>木工组</h5>
        <h6 v-for="(item,index) in teamInfo.team1" :key="index">
          工人{{index+1}}<span>{{item.name}}</span>
        </h6>
      </li>
      <li>
        <h5>泥水组</h5>
        <h6 v-for="(item,index) in teamInfo.team2" :key="index">
          工人{{index+1}}<span>{{item.name}}</span>
        </h6>
      </li>
      <li>
        <h5>油漆组</h5>
        <h6 v-for="(item,index) in teamInfo.team4" :key="index">
          工人{{index+1}}<span>{{item.name}}</span>
        </h6>
      </li>
      <li>
        <h5>电工组</h5>
        <h6 v-for="(item,index) in teamInfo.team4" :key="index">
          工人{{index+1}}<span>{{item.name}}</span>
        </h6>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TeamInformation',
  data() {
    return {
      teamInfo: {}
    }
  },
  computed: {
    ...mapState(["projectId"]),
  },
  created() {
    this.$http.getTeamInfo(this.projectId).then(resp => {
      console.log(resp)
      if(resp.status === 200) {
        this.teamInfo = resp.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .teamInformation{
    width: 100%;
    min-height: 100vh;
    background: #e7e7e7;
    padding-bottom: 25px;
    .wrap1{
      width: 100%;
      height: auto;
      li{
        width: 100%;
        height: 184px;
        background: #dfdfdf;
        margin-bottom: 15px;
        border-top: 1px solid #d1d1d1;
        h4{
          width: 100%;
          height: 92px;
          font-size: 28px;
          line-height: 92px;
          border-bottom: 1px solid #d1d1d1;
          padding: 0 25px;
          span{
            float: right;
          }
        }
      }
    }
    .wrap2{
      width: 100%;
      height: auto;
      li{
        width: 100%;
        height: auto;
        h5{
          width: 100%;
          height: 90px;
          font-size: 28px;
          line-height: 90px;
          padding: 0 25px;
        }
        h6{
          width: 100%;
          height: 90px;
          font-size: 26px;
          line-height: 90px;
          padding: 0 25px;
          border-top: 1px solid #d1d1d1;
          border-bottom: 1px solid #d1d1d1;
          background: #dfdfdf;
          span{
            float: right;
          }
        }
      }
    }
  }
</style>
