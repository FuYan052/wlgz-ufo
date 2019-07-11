<template>
  <!-- 最新消息 -->
  <div class="news" v-title data-title="最新消息">
    <div class="doItem" v-for="(item,index) in 3" :key="index">
      <p>2018-11-12  15:23:56</p>  
      <h6>明天准备开工明天准备开工明天准备开工明天准备开工明天准备开工明天准备开工明天准备开工</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News'
}
</script>

<style lang="scss" scoped>
  .news{
    width: 100%;
    min-height: 100vh;
    .doItem{
      width: 100%;
      min-height: 230px;
      background: #f0f0f0;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      margin-bottom: 20px;
      padding-left: 35px;
      padding-right: 100px;
      p{
        font-size: 26px;
        line-height: 70px;
      }
      h6{
        font-size: 26px;
        line-height: 45px;
      }
    }
  }
</style>

