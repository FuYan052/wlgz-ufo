<template>
  <div class="ht_home">
    <div class="choiceRole">
      请选择角色
    </div>
    <div class="role" @click="choiceRole(role1)">我是业主</div>
    <div class="role" @click="choiceRole(role2)">我是项目经理</div>
    <div class="role" @click="choiceRole(role3)">我是设计师</div>
  </div>
</template>

<script>
export default {
  name: 'BackstageHome',
  data() {
    return {
      role1: 1, //业主身份
      role2: 2, //项目经理身份
      role3: 3, //设计师身份
      type: null
    }
  },
  computed: {
  },
  created() {
    this.type = Number(this.$store.state.type)
  },
  methods: {
    choiceRole(role) {
      console.log('type:'+ this.type)
      console.log('role:'+ role)
      if(role === this.type){
        if(role === 1){
          this.$router.push({
            path: '/userCenter',
          })
        }
        if(role === 2){
          this.$router.push({
            path: '/managerHome',
          })
        }
        if(role === 3){
          this.$router.push({
            path: '/designerHome',
          })
        }
      }else{
        this.$message('抱歉，身份不符！');
      }
    }
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

