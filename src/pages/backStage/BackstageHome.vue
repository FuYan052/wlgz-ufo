<template>
  <div class="ht_home">
    <div class="choiceRole">
      请选择角色
    </div>
    <div class="role" @click="choiceRole1">我是业主</div>
    <div class="role" @click="choiceRole2">我是项目经理</div>
    <div class="role" @click="choiceRole3">我是设计师</div>
  </div>
</template>

<script>
export default {
  name: 'BackstageHome',
  methods: {
    choiceRole1() {
      this.$router.push({
        path: '/login',
        name: 'Login',
        params: {
          role: 'role1' //业主身份
        }
      })
    },
    choiceRole2() {
      this.$router.push({
        path: '/login',
        name: 'Login',
        params: {
          role: 'role1'  //项目经理身份
        }
      })
    },
    choiceRole3() {
      this.$router.push({
        path: '/login',
        name: 'Login',
        params: {
          role: 'role1'  //设计师身份
        }
      })
    },
  }
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

