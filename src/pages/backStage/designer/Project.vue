<template>
  <!-- 设计师项目首页 -->
  <div class="d-project">
    <h5 class="title1">状态：</h5>
    <div :class="{notShow : stateList1.length === 0}">
      <div class="stateItem stateItem1" :class="{borderBottom : stateList1.length > 0}">
        <h5 class="title" :class="{redBorder : stateList1.length > 0}">
          预约量房
        </h5>
        <div class="detail">
          <ul>
            <li v-for="(it,ind) in stateList1" :key="ind">
              <span class="dashed"></span>
              <div class="itemDetail">
                <input type="checkbox" v-model="it.resultState" class="checkbox" name="checkbox" id="checkbox">
                <h6 class="day">{{it.day}}</h6>
                <h6 class="minute">{{it.hour}}</h6>
                <h6 class="name">{{it.result}}</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div :class="{notShow : stateList2.length === 0}">
      <div class="stateItem" :class="{borderBottom : stateList2.length > 0}">
        <h5 class="title" :class="{redBorder : stateList2.length > 0}">
          概念图
        </h5>
        <div class="detail">
          <ul>
            <li v-for="(it,ind) in stateList2" :key="ind">
              <span class="dashed"></span>
              <div class="itemDetail">
                <input type="checkbox" v-model="it.resultState" class="checkbox" name="checkbox" id="checkbox">
                <h6 class="day">{{it.day}}</h6>
                <h6 class="minute">{{it.hour}}</h6>
                <h6 class="name">{{it.result}}</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div :class="{notShow : stateList3.length === 0}">
      <div class="stateItem" :class="{borderBottom : stateList3.length > 0}">
        <h5 class="title" :class="{redBorder : stateList3.length > 0}">
          效果图设计
        </h5>
        <div class="detail">
          <ul>
            <li v-for="(it,ind) in stateList3" :key="ind">
              <span class="dashed"></span>
              <div class="itemDetail">
                <input type="checkbox" v-model="it.resultState" class="checkbox" name="checkbox" id="checkbox">
                <h6 class="day">{{it.day}}</h6>
                <h6 class="minute">{{it.hour}}</h6>
                <h6 class="name">{{it.result}}</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="{notShow : stateList4.length === 0}">
      <div class="stateItem" :class="{borderBottom : stateList4.length > 0}">
        <h5 class="title" :class="{redBorder : stateList4.length > 0}">
          施工图
        </h5>
        <div class="detail">
          <ul>
            <li v-for="(it,ind) in stateList4" :key="ind">
              <span class="dashed"></span>
              <div class="itemDetail">
                <input type="checkbox" v-model="it.resultState" class="checkbox" name="checkbox" id="checkbox">
                <h6 class="day">{{it.day}}</h6>
                <h6 class="minute">{{it.hour}}</h6>
                <h6 class="name">{{it.result}}</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 添加状态按钮 -->
    <div class="toAddBtn" @click="toAdd">
      更新状态
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      stateList1: [],
      stateList2: [],
      stateList3: [],
      stateList4: [],
    }
  },
  created() {
    // this.$http.getProstate().then(resp => {
    //   console.log(resp)
    // })

    this.stateList1 = [
      {
        id: 1,
        day: '2019.07.01',
        hour: '15.00.01',
        result: '预约成功',
        resultState: true
      },
      {
        id: 2,
        day: '2019.07.02',
        hour: '15.00.05',
        result: '量房成功',
        resultState: true
      },
    ]

    this.stateList2 = [
      {
        id: 1,
        day: '2019.07.01',
        hour: '15.00.01',
        result: '初次概念图出图完成',
        resultState: false
      },
      {
        id: 2,
        day: '2019.07.02',
        hour: '15.00.05',
        result: '二次概念设计图待出图，二次概念设计图待出图，预计出图时间2018.06.14',
        resultState: false
      },
    ]
    // this.stateList3 = [
    //   {
    //     id: 1,
    //     day: '2019.07.01',
    //     hour: '15.00.01',
    //     result: '初次概念图出图完成',
    //     resultState: false
    //   },
    // ]
  },
  methods: {
    toAdd() {
      this.$router.push({
        path: '/designerProject/addState'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .d-project{
    width: 100%;
    min-height: 100vh;
    background: #ebebeb;
    .title1{
      width: 100%;
      font-size: 26px;
      padding-left: 40px;
      padding-top: 50px;
    }
    div{
      .stateItem{
        width: 100%;
        height: auto;
        padding-left: 20px;
        padding-bottom: 30px;
        border-top: 1px solid #cccccc;
        .title{
          width: 100%;
          height: 40px;
          margin-top: 35px;
          font-size: 26px;
          line-height: 40px;
          border-left: 10px solid #ff0000;
          padding-left: 8px;
        }
        .detail{
          width: 100%;
          height: auto;
          ul{
            width: 100%;
            height: auto;
            margin-top: 20px;
            padding-left: 50px;
            padding-right: 20px;
            li{
              width: 100%;
              height: auto;
              .dashed{
                display: block;
                width: 100%;
                height: 65px;
                margin-left: 10px;
                border-left: 2px dashed #696969;
              }
              .itemDetail{
                width: 100%;
                min-height: 55px;
                input{
                  appearance: none;
                  width: 28px;
                  height: 28px;
                  border: 4px solid #00ff00;
                  outline: none;
                }
                input:checked{
                  background: url('../../../assets/checked.png') no-repeat center;
                  background-size: 100% 100%;
                }
                h6{
                  display: inline-block;
                  margin-left: 22px;
                  line-height: 55px;
                  font-size: 26px;
                }
              }
            }
            li:nth-child(1){
              .dashed{
                display: none;
              }
            }
          }
        }
        .addBtn{
          width: 100%;
          height: 140px;
          padding-top: 60px;
          padding-left: 180px;
          .addIcon{
            display: inline-block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: url('../../../assets/btnIcon.png') no-repeat center;
            background-size: contain;
            vertical-align: top;
          }
          .addBtnText{
            display: inline-block;
            width: 240px;
            height: 48px;
            font-size: 26px;
            line-height: 48px;
            text-align: center;
            border-radius: 15px;
            border: 1px solid #696969;
            background: #ccc;
            vertical-align: top;
            margin-left: 40px;
          }
        }
      }
      .stateItem1{
        border-top: none;
      }
    }
    .notShow{
      display: none;
    }
    .toAddBtn{
      width: 330px;
      height: 70px;
      font-style: 26px;
      line-height: 70px;
      text-align: center;
      border: 1px solid #6a6a6a;
      border-radius: 20px;
      background: #fff;
      margin: 0 auto;
      margin-top: 50px;
    }
  }
</style>

