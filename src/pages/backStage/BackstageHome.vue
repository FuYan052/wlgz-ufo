<template>
  <div class="ht_home">
    <div class="choiceRole">
      请选择角色
    </div>
    <div class="role">我是业主</div>
    <div class="role">我是项目经理</div>
    <div class="role">我是设计师</div>
  </div>
</template>

<script>
export default {
  name: 'BackstageHome'
}
</script>

<style lang="scss" scoped>
  .ht_home{
    width: 100%;
    .choiceRole{
      width: 100%;
      font-size: 36px;
      text-align: center;
      margin-top: 138px;
      margin-bottom: 118px;
    }
    .role{
      width: 575px;
      height: 74px;
      margin: 0 auto;
      font-size: 26px;
      color: #fff;
      text-align: center;
      line-height: 74px;
      background: #ffbe00;
      border-radius: 20px;
      margin-bottom: 100px;
    }
  }
</style>

