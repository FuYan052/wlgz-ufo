<template>
<!-- 材料 -->
  <div class="material">
    <div v-for="(item,index) in 4" :key="index">
      <h4 class="m-title" @click="changeShow(index)">
        实木地板<span><b class="el-icon-arrow-right" v-show="index !== j"></b><b v-show="index === j" class="el-icon-arrow-down"></b></span>
      </h4>
      <div class="m-detail" v-show="index === j">
        <h5>
          品牌规格：<span>圣象面漆地板900*80*18（富彬牌）</span>
        </h5>
        <h5>
          单位：<span>㎡</span>
        </h5>
        <h5>
          数量：<span>31.3</span>
        </h5>
        <h5>
          单价：<span>787元</span>
        </h5>
        <h5>
          总价：<span>24633.1元</span>
        </h5>
        <h5>
          所用部位：<span>总裁办公室</span>
        </h5>
        <h5>
          到货时间：<span class="date">
            <div class="block">
              <el-date-picker
                v-model="value1"
                @change="dateChange"
                value-format="yyyy-MM-dd"
                align="left"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </span>
        </h5>
        <h5>
          到货照片：<span class="image">
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
              <img preview="6" width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </span>
        </h5>
        <div class="submit" @click="handleSubmit">
          提交
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Material',
  data() {
    return {
      isShowDetail: false,
      j: -1,
      value1: '',
      dialogImageUrl: '',
      dialogVisible: false,
      imgs: ''
    }
  },
  created() {
    // this.$http.getMaterial().then(resp => {
    //   console.log(resp)
    //   if(resp.status === 200) {

    //   }
    // })
  },
  methods: {
    dateChange(v) {
      console.log(v)
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
      this.imgs = fileList
    },
    changeShow(index) {
      this.isShowDetail = !this.isShowDetail
      if(this.isShowDetail){
        this.j = index
      }
      if(!this.isShowDetail){
        this.j = -1
      }
    },
    handleSubmit() {
      const params = {
        id: 1001,
        date: this.value1,
        imgs: this.imgs
      }
      // this.$http.Materialprogress().then(resp => {
      //   console.log(resp)
      //   if(resp.status === 200) {

      //   }
      // })
      console.log(params)
    }
  }
}
</script>

<style lang="scss" scoped>
  .material{
    width: 100%;
    height: auto;
    .m-title{
      width: 100%;
      height: 90px;
      background: #f0f0f0;
      border-top: 1px solid #d0d0d0;
      border-bottom: 1px solid #d0d0d0;
      font-size: 28px;
      line-height: 90px;
      padding-left: 20px;
      padding-right: 45px;
      span{
        float: right;
      }
    }
    .m-detail{
      width: 100%;
      height: auto;
      padding-bottom: 50px;
      h5{
        width: 100%;
        font-size: 26px;
        margin-top: 30px;
        padding-left: 60px;
        span{
          padding-left: 40px;
        }
        .date{
          display: inline-block;
          width: 450px;
          height: 50px;
        }
        .image{
          display: block;
          width: 670px;
          min-height: 170px;
          border: 1px solid #ededed;
          margin-left: -20px;
          margin-top: 37px;
          padding: 30px 20px;
        }
      }
      .submit{
        width: 135px;
        height: 40px;
        color: #fff;
        font-size: 24px;
        line-height: 40px;;
        text-align: center;
        background: #33cc66;
        border-radius: 6px;
        margin: 0 auto;
        margin-top: 50px;
      }
    }
  }
</style>
<style>
.el-popper[x-placement^=bottom] .popper__arrow:after{
  content: ''
}
.date .block .el-date-editor.el-input{
  width: 350px;
}
.el-date-picker{
  width: 400px !important;
}
.el-input--prefix .el-input__inner{
  padding-left: 45px;
  color: black;
}
.el-date-picker .el-picker-panel__content{
  width: 350px;
}
.el-date-table td{
  padding: 6px 0;
}
.el-date-table td span{
  width: 32px;
  height: 32px;
  line-height: 32px;
}
.material .el-upload-list--picture-card .el-upload-list__item{
  /* margin: 0 1.567vw 1.067vw 0; */
}
.material .el-progress{
  margin-top: 40px;
  width: 85%;
}
</style>

