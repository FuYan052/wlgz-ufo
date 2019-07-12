<template>
  <div class="addWeeklyReport">
    <div class="title1">装修情况:</div>
    <div class="addTeaxarea">
      <text-area  v-on:childByValue="childByValue1"></text-area>
    </div>
    <div class="title2">完成比例:</div>
    <div class="percentBox">
      <el-progress :percentage="percentage" :color="customColors"></el-progress>
      <p class="number">
        <input type="number" v-model="percentage" name="" id="">%
      </p>
    </div>
    <div class="title3">综合评价:</div>
    <div class="addTeaxarea">
      <text-area  v-on:childByValue="childByValue2"></text-area>
    </div>
    <div class="title4">现场照片:</div>
    <div class="picBox">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :limit='8'
        :multiple='true'
        :on-change="showList"
        :on-exceed="overLimit"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img preview="3" width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div class="submitBtn">
      提交
    </div>
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
      weeklyText1: '',
      weeklyText2: '',
      dialogImageUrl: '',
      dialogVisible: false,
      percentage: 30,
      customColors: [
        {color: '#f22e2e', percentage: 40},
        {color: '#e6a23c', percentage: 80},
        {color: '#5cb87a', percentage: 100},
      ]
    }
  },
  created() {
    // console.log($)
  },
  methods: {
    overLimit(file, fileList) {
      this.$message({
          message: '最多上传8张',
          type: 'warning'
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    showList(file, fileList) {
      console.log(fileList)
    },
    childByValue1(childValue) {
      this.weeklyText1 = childValue
      // console.log(this.weeklyText1)
    },
    childByValue2(childValue) {
      this.weeklyText2 = childValue
      // console.log('综合评价：'+ this.weeklyText2)
    },
  }
}
</script>

<style lang="scss" scoped>
  .addWeeklyReport{
    width: 100%;
    min-height: auto;
    background: #e7e7e7;
    padding: 0 20px;
    padding-bottom: 100px;
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
    .percentBox{
      width: 100%;
      height: 120px;
      padding-top: 10px;
      .number{
        float: right;
        margin-top: -40px;
        margin-right: 10px;
        input{
          width: 55px;
          height: 55px;
          font-size: 30px;
          line-height: 55px;
          text-align: center;
          border: 1px solid #737373;
          outline: none;
        }
      }
    }
    .title3{
      width: 100%;
      height: 110px;
      line-height: 110px;
      padding-left: 20px;
      font-size: 36px;
    }
    .title4{
      width: 100%;
      height: 110px;
      line-height: 110px;
      padding-left: 20px;
      font-size: 36px;
    }
    .picBox{
      width: 100%;
      min-height: 173px;
      background: #fff;
      padding: 30px 20px;
      padding-right: 0;
    }
    .submitBtn{
      width: 410px;
      height: 90px;
      margin: 0 auto;
      margin-top: 100px;
      font-size: 34px;
      color: #fff;
      line-height: 90px;
      text-align: center;
      background: #1aad19;
      border-radius: 10px;
    }
  }
</style>
<style>
.addWeeklyReport .el-upload-list--picture-card .el-upload-list__item{
  margin: 0 3.267vw 1.067vw 0;
}
.addWeeklyReport .el-progress{
  margin-top: 40px;
  width: 85%;
}
.addWeeklyReport .el-progress .el-progress-bar{
  width: 100%;
}
.addWeeklyReport .el-progress .el-progress__text{
  display: none;
}
.addWeeklyReport .el-progress .el-progress-bar .el-progress-bar__outer{
  background-color: #fff;
  border: 2px solid #737373;
  height: 24px !important;
}
</style>
