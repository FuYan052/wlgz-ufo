<template>
  <div class="selectBox">
    <p>
      <span class="stateName">状态</span>
      <span class="select">
        <el-select v-model="value1" @change="nextSelect(value1)" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :value="item.label"
            >
          </el-option>
        </el-select>
      </span>
    </p>
    <p>
      <span class="stateName">进度</span>
      <span class="select">
        <el-select v-model="value2" @change="selectedResult(value2)" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :value="item.label">
          </el-option>
        </el-select>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SelectState',
  data() {
    return {
      options1: [],
      value1: '', //第一个下拉框的值
      options2: [],
      value2: '', //第二个下拉框的值
      options1_1: [],
      options1_2: [],
      resultState: '' //状态为true或false
    }
  },
  created() {
    this.options1 = [
      {
        value: '选项1',
        label: '预约量房',
      }, {
        value: '选项2',
        label: '概念设计',
      }, {
        value: '选项3',
        label: '效果图',
      },{
        value: '选项4',
        label: '施工图',
      }]
    this.options1_1 = [
      {
        value: '选项1',
        label: '预约成功',
      }, {
        value: '选项2',
        label: '量房成功',
      }, {
        value: '选项3',
        label: '量房失败',
      }]
    this.options1_2 = [
      {
        value: '选项1',
        label: '首次出图完成',
      }, {
        value: '选项2',
        label: '准备修改',
      }, {
        value: '选项3',
        label: '修改完成',
      }, {
        value: '选项4',
        label: '出图成功',
      }, {
        value: '选项5',
        label: '出图失败',
      }]
  },
  methods: {
    nextSelect(v) {
      console.log(v)
      if(v == '预约量房') {
        this.options2 = this.options1_1
      }else{
        this.options2 = this.options1_2
      }
    },
    selectedResult(value) {
      if(value == '量房失败' || value == '出图失败'){
        this.resultState = false
      }else{
        this.resultState = true
      }
      const result = {
        select1: this.value1,
        select2: this.value2,
        resultState: this.resultState
      }
      this.$emit('childBySelect', result)
    }
  }
}
</script>

<style>
.selectBox{
  width: 100%;
  height: 100%;
}
.selectBox p{
  padding-top: 60px;
}
.selectBox p span{
  font-size: 26px;
  font-weight: 700;
}
.selectBox p .stateName{
  padding-right: 20px;
}
.selectBox p .select{
  display: inline-block;
}
.selectBox p .select .el-select{
  width: 315px;
  height: 45px;
}
.el-select-dropdown__item{
  height: 45px;
  line-height: 45px;
}
.el-select:hover .el-input__inner{
  outline: none;
}
</style>
