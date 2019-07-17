<template>
  <div class="addDailyReport">
    <div class="title1">施工内容:</div>
    <div class="addTeaxarea">
      <text-area  v-on:childByValue="childByValue"></text-area>
    </div>
    <div class="title2">现场照片:</div>
    <div class="picBox">
      <el-upload
        name="file"
        action="none"
        list-type="picture-card"
        :limit='8'
        :multiple='true'
        :auto-upload="false"
        :on-change="showList"
        :on-exceed="overLimit"
        :on-preview="handlePictureCardPreview"
        ref="upload"
        :http-request="uploadSectionFile"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img preview="1" width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div class="submitBtn" @click="submitDaily">
      提交
    </div>
  </div>
</template>

<script>
import TextArea from '../../../components/TextArea'
import { mapState } from "vuex"
export default {
  name: 'AddDailyReport',
  components: {
    TextArea
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      dailyText: '',
      imgList: '',
      imgListUrl: '',
      formData: '',
    }
  },
  computed: {
    ...mapState(["projectId"]),
  },
  methods: {
    uploadSectionFile(file) {
      this.formData.append('file', file.file);
    },
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
      // console.log(fileList)
      this.imgList = fileList
    },
    childByValue(childValue) {
      this.dailyText = childValue
      // console.log(this.dailyText)
    },
    submitDaily() {
      // 上传图片
      this.formData = new FormData()
      this.$refs.upload.submit();
      this.$http.postUpolad(this.formData).then(resp => {
        console.log(resp)
        if(resp.status === 200){
          this.imgListUrl = resp.data.data
          // 提交文本内容
          const params = JSON.stringify({
            projectId: this.projectId,
            content: this.dailyText,
            images: this.imgListUrl,
          })
          this.$http.postAddDaily(params).then(resp => {
            console.log(resp)
            if(resp.status === 200) {

            }
          })
        }else{
          this.$message({
            message: '上传失败，请重试！',
            type: 'warning'
          });
        }
      })
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
<style>
.addDailyReport .el-upload-list--picture-card .el-upload-list__item{
  margin: 0 3.267vw 1.067vw 0;
}
</style>
