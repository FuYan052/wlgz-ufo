<template>
  <div class="drawing" v-title data-title="设计出图">
    <div class="designer">
      <!-- 当有项目时显示 -->
      <div class="hasProject" v-show="hasProject">
        <p>我的设计师</p>
        <div class="wrap">
          <div class="designerPic">
            <img preview="8" src="../assets/touxiang.jpg" alt="">
          </div>
          <div class="designerName">
            <p>王某某</p>
            <p>设计总监</p>
          </div>
          <div class="contact">加我联系</div>
        </div>
      </div>
      <!-- 当前没有项目时显示 -->
      <div class="noProject" v-show="!hasProject">
        <h6>您还没有项目哦！</h6>
        <div class="consultation">
          马上咨询
        </div>
      </div>

    </div>
    <div class="progress">
      <ul>
        <li>
          <span></span>
          <p>预约量房</p>
          <div class="after"></div>
        </li>
        <li>
          <span></span>
          <p>概念设计</p>
          <div class="after"></div>
        </li>
        <li>
          <span></span>
          <p>效果图</p>
          <div class="after"></div>
        </li>
        <li>
          <span></span>
          <p>施工图</p>
        </li>
      </ul>
    </div>
    <div class="clearance"></div>
    <!-- 当有项目时显示 -->
    <!-- 项目进度 -->
    <div class="content" v-show="hasProject">
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
    </div>
    <!-- 推荐设计师 -->
    <div class="content" v-show="!hasProject">
      <p class="tj">推荐设计师</p>
      <ul>
        <li v-for="(item,index) in 4" :key="index">
          <img preview="8" src="../assets/touxiang.jpg" alt="">
          <p id="name">设计总监<span>王伟伟</span></p>
          <p class="count">服务超过135个客户</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drawing',
  data() {
    return {
      stateList1: [],
      stateList2: [],
      stateList3: [],
      stateList4: [],
      hasProject: true
    }
  },
  created() {
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
  }
}
</script>

<style lang="scss" scoped>
  .drawing{
    width: 100%;
    min-height: 100vh;
    .designer{
      width: 100%;
      height: 310px;
      overflow: hidden;
      border-bottom: 1px solid #cdcdcd;
      .hasProject{
        width: 100%;
        padding-left: 35px;
        p{
          font-size: 24px;
          line-height: 60px;
        }
        .wrap{
          width: 100%;
          height: 185px;
          .designerPic{
            width: 162px;
            height: 162px;
            float: left;
            margin-top: 20px;
            img{
              width: 162px;
              height: 162px;
              float: left;
            }
          }
          .designerName{
            width: 180px;
            height: 185px;
            float: left;
            margin-left: 47px;
            padding-top: 80px;
            p:nth-child(1){
              font-size: 30px;
            }
            p:nth-child(2){
              font-size: 20px;
            }
          }
          .contact{
            width: 145px;
            line-height: 40px;
            text-align: center;
            font-size: 26px;
            border: 1px solid #0707ff;
            border-radius: 12px;
            float: left;
            margin-top: 137px;
          }
        }
      }
      .noProject{
        width: 100%;
        height: 100%;
        h6{
          font-size: 34px;
          text-align: center;
          margin-top: 110px;
        }
        .consultation{
          width: 210px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-size: 25px;
          border: 1px solid #0368cd;
          border-radius: 15px;
          margin: 0 auto;
          margin-top: 40px;
        }
      }
    }
    .progress{
      width: 100%;
      height: 165px;
      border-bottom: 1px solid #cdcdcd;
      ul{
        width: 100%;
        height: 100%;
        padding-left: 30px;
        li{
          width: 162px;
          height: 100%;
          float: left;
          position: relative;
          span{
            display: block;
            width: 65px;
            height: 65px;
            border: 1px solid red;
            border-radius: 50%;
            margin: 20px auto;
          }
          p{
            text-align: center;
            font-size: 25px;
          }
          .after{
            display: inline-block;
            width: 68px;
            height: 57px;
            border-bottom: 1px dashed #5a5a5a;
            position: absolute;
            top: 0;
            right: -30px;
          }
        }
      }
    }
    .clearance{
      width: 100%;
      height: 20px;
      background: #ededed;
    }
    .content{
      width: 100%;
      height: 100px;
      // height: auto;
      border-top: 1px solid #cdcdcd;
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
                  background: url('../assets/checked.png') no-repeat center;
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
            background: url('../assets/btnIcon.png') no-repeat center;
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
    //推荐设计师
      .tj{
        margin-top: 25px;
        margin-left: 35px;
        font-size: 26px;
      }
      ul{
        width: 100%;
        height: auto;
        li{
          width: 50%;
          height: 310px;
          display: inline-block;
          margin-top: 20px;
          img{
            width: 162px;
            height: 162px;
            margin: 0 auto;
            margin-top: 30px;
          }
          #name{
            font-size: 28px;
            text-align: center;
            margin-top: 25px;
            span{
              padding-left: 25px;
            }
          }
          .count{
            font-size: 16px;
            text-align: center;
            margin-top: 20px;
          }
        }
      }
    }
  }
</style>

