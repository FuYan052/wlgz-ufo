<template>
  <div class="addWeeklyReport">
    <div class="title1">装修情况:</div>
    <div class="addTeaxarea">
      <text-area  v-on:childByValue="childByValue"></text-area>
    </div>
    <div class="title2">完成比例:</div>
  </div>
</template>

<script>
import TextArea from '../../../components/TextArea'
export default {
  name: 'AddWeeklyReport',
  components: {
    TextArea
  },
  data() {
    return {
      weeklyText: ''
    }
  },
  methods: {
    childByValue(childValue) {
      this.weeklyText = childValue
      console.log(this.weeklyText)
    }
  }
}
</script>

<style lang="scss" scoped>
  .addWeeklyReport{
    width: 100%;
    height: 100vh;
    background: #e7e7e7;
    padding: 0 20px;
    .title1{
      width: 100%;
      height: 110px;
      line-height: 110px;
      padding-left: 20px;
      font-size: 36px;
    }
    .addTeaxarea{
      width: 100%;
    }
    .title2{
      width: 100%;
      padding-left: 20px;
      font-size: 36px;
      margin-top: 60px;
      margin-bottom: 25px;
    }
  }
</style>
