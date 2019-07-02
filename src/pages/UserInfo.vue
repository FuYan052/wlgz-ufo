<template>
  <div class="information" v-title data-title="个人信息">
    <!-- 基本信息 -->
    <div class="baseInfo">
      <div class="title">
        基本信息
      </div>
      <ul class="infoItem">
        <li>
          姓名<span>{{infos.name}}</span>
        </li>
        <li>
          手机号<span>{{infos.phoneNum}}</span>
        </li>
        <li>
          项目地区<span>{{infos.projectArea}}</span>
        </li>
        <li>
          详细地址<span>{{infos.address}}</span>
        </li>
        <li>
          公司名称<span>{{infos.companyName}}</span>
        </li>
      </ul>
    </div>
    <!-- 施工班组 -->
    <div class="constructionTeam">
      <div class="title">
        施工班组
      </div>
      <ul class="teamItem">
        <li>
          班组长<span>{{team.bzz}}</span>
        </li>
        <li class="phone">
          电话<span>{{team.bzzPhone}}</span>
        </li>
        <li>
          监理<span>{{team.jl}}</span>
        </li>
        <li class="phone">
          电话<span>{{team.jlPhone}}</span>
        </li>
        <li>
          漆工<span>{{team.qg}}</span>
        </li>
        <li>
          电工<span>{{team.dg}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return{
      infos: {},
      team: {}
    }
  },
  created() {
    this.infos = {
      name: '张雨晨',
      phoneNum: '13412345678',
      projectArea: '四川省成都市高新区',
      address: '益州大道555号星辰国际B座1503',
      companyName: '海洋科技发展有限公司'
    }
    this.team = {
      bzz: '何玉华',
      bzzPhone: '18686885423',
      jl: '李桥',
      jlPhone: '1896523654',
      qg: '张力',
      dg: '任方伟',
    }
  }
}
</script>

<style lang="scss" scoped>
  .information{
    width: 100%;
    .baseInfo{
      width: 100%;
      height: auto;
      .title{
        width: 100%;
        height: 92px;
        color: #666666;
        font-size: 28px;
        line-height: 78px;
        padding-left: 20px;
      }
      .infoItem{
        width: 100%;
        height: auto;
        li{
          width: 100%;
          height: 88px;
          background: #f0f0f0;
          border-top: 1px solid #d0d0d0;
          border-bottom: 1px solid #d0d0d0;
          font-size: 28px;
          line-height: 88px;
          padding-left: 18px;
          padding-right: 40px;
          span{
            float: right;
          }
        }
      }
    }
    .constructionTeam{
      width: 100%;
      height: auto;
      .title{
        width: 100%;
        height: 92px;
        color: #666666;
        font-size: 28px;
        line-height: 78px;
        padding-left: 20px;
      }
      .teamItem{
        width: 100%;
        height: auto;
        li{
          width: 100%;
          height: 88px;
          background: #f0f0f0;
          border-top: 1px solid #d0d0d0;
          border-bottom: 1px solid #d0d0d0;
          font-size: 28px;
          line-height: 88px;
          padding-left: 18px;
          padding-right: 40px;
          span{
            float: right;
          }
        }
        .phone{
          padding-left: 85px;
        }
      }
    }
  }
</style>

