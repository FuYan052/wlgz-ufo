<template>
  <div class="intelligentOffice" v-title data-title="智能办公">
    <ul>
      <li v-for="(item,index) in 4" :key="index">
        <img src="../assets/touxiang.jpg" alt="">
        <p>小米打印机</p>
        <p>￥499</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IntelligentOffice'
}
</script>

<style lang="scss" scoped>
  .intelligentOffice{
    width: 100%;
    ul{
      width: 100%;
      padding: 0 40px;
      li{
        width: 50%;
        height: 380px;
        float: left;
        img{
          width: 225px;
          height: 225px;
          margin: 0 auto;
          margin-top: 30px;
        }
        p{
          font-size: 26px;
          line-height: 60px;
          text-align: center;
        }
      }
    }
  }
</style>
