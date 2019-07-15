<template>
  <div class="login" v-title data-title="登录">
    <p>请输入你的手机号</p>
    <div class="inputPhone">
      <span>中国&nbsp;+86</span>
      <input class="telephone" type="text" v-model="phoneNum" placeholder="请输入您预留的手机号码">
    </div>
    <p>请输入密码</p>
    <div class="password">
      <input type="password" v-model="password">
    </div>
    <div class="loginBtn" @click="handleLogin">
      登录
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      phoneNum: '18215636449',
      password: '123456',
    }
  },
  created() {
  },
  computed: {
    ...mapState(['isLogin'])
  },
  watch: {
    isLogin () {
      // 当isLogin为true的时候，执行跳转

      // const {
      //   from = '/home'
      // } = this.$route.params
      // this.$router.push(from)
    }
  },
  methods: {
    ...mapMutations(['changeLoginStatus','changeType','changeUserPhone','changeToken']),
    handleLogin () {
      const params = {
        phoneNum: this.phoneNum,
        password: this.password
      }
      this.$http.postLogin(params).then(resp => {
        console.log(resp)
        if(resp.status === 200) {
          window.localStorage.setItem('type', resp.data.type)
          window.localStorage.setItem('userPhone', resp.data.phone)
          window.localStorage.setItem('ufo-token', resp.data.token)
          this.changeType(resp.data.type)
          this.changeLoginStatus(true)
          this.changeUserPhone(resp.data.phone)
          this.changeToken(resp.data.token)
          this.$router.push({
            path: '/backstageHome', 
            name: 'BackstageHome',
            params: {
              type: resp.data.type
            }
          })
        }
        if(resp.status === 201) {
          this.$message('用户名或密码错误！')
        }
      })
      // this.$http.postLogin()
      //   .then(resp => {
      //     if (resp.code === 200) {
      //       window.localStorage.setItem('rzg-token', resp.data.token)
      //       this.changeLoginStatus(true)
      //     }
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    width: 100%;
    padding: 0 35px;
    p{
      margin: 60px 0;
      font-size: 38px;
    }
    .inputPhone{
      width: 100%;
      height: 64px;
      border-bottom: 2px solid #d1d1d1;
      padding-bottom: 4px;
      span{
        display: inline-block;
        width: 140px;
        font-size: 26px;
        text-align: center;
        height: 64px;
        line-height: 64px;
        margin-bottom: 4px;
        border-right: 1px solid #d1d1d1;
      }
      .telephone{
        width: 500px;
        height: 55px;
        margin-left: 30px;
        outline: none;
        border: none;
        font-size: 32px;
      }
    }
    .password{
      width: 100%;
      height: 64px;
      padding-left: 30px;
      border-bottom: 2px solid #d1d1d1;
      padding-bottom: 4px;
      input{
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        font-size: 26px;
      }
    }
    .loginBtn{
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

