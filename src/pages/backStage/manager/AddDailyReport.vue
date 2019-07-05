<template>
  <div class="addDailyReport">
    <div class="title1">施工内容:</div>
    <div class="addTeaxarea">
      <text-area  v-on:childByValue="childByValue"></text-area>
    </div>
    <div class="title2">现场照片:</div>
    <div class="picBox">
      <!-- <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog> -->
    </div>
    <div class="submitBtn">
      提交
    </div>
  </div>
</template>

<script>
import TextArea from '../../../components/TextArea'
export default {
  name: 'AddDailyReport',
  components: {
    TextArea
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      dailyText: ''
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    childByValue(childValue) {
      this.dailyText = childValue
      // console.log(this.dailyText)
    }
  }
}
</script>

<style lang="scss" scoped>
  .addDailyReport{
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
    .title2{
      width: 100%;
      padding-left: 20px;
      font-size: 36px;
      margin-top: 60px;
      margin-bottom: 25px;
    }
    .picBox{
      width: 100%;
      min-height: 173px;
      background: #fff;
      padding: 30px 20px;
      padding-right: 0;
      .el-upload-list--picture-card{
        .el-upload-list__item{
          margin-right: 12px !important;
        }
      }
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
