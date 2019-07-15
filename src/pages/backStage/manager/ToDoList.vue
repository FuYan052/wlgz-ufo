<template>
  <div class="toDoList">
    <div class="title1">添加待办事项</div>
    <div class="addTeaxarea">
      <text-area  v-on:childByValue="childByValue"></text-area>
    </div>
    <div class="submitBtn" @click="submitDoList">
      提交
    </div>
  </div>
</template>

<script>
import TextArea from '../../../components/TextArea'
export default {
  name: 'ToDoList',
  components: {
    TextArea
  },
  data() {
    return {
      toDoText: ''
    }
  },
  methods: {
    childByValue(childValue) {
      this.toDoText = childValue
      console.log(this.toDoText)
    },
    submitDoList() {
      console.log(this.toDoText)
      // this.$http.postDoList().then(resp => {
      //   console.log(resp)

      // })
    }
  }
}
</script>

<style lang="scss" scoped>
  .toDoList{
    width: 100%;
    min-height: 100vh;
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
    .submitBtn{
      width: 410px;
      height: 90px;
      margin: 0 auto;
      margin-top: 205px;
      font-size: 34px;
      color: #fff;
      line-height: 90px;
      text-align: center;
      background: #1aad19;
      border-radius: 10px;
    }
  }
</style>
