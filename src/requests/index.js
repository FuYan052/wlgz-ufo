import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const ajax = axios.create({
  baseURL: 'http://192.168.0.122:9000/'
})

const ajax2 = axios.create({
  baseURL: 'http://192.168.0.122:9000/',
  headers: {
    'Content-Type':'multipart/form-data'
  },
})
const ajax3 = axios.create({
  baseURL: 'http://192.168.0.122:9000/',
  headers: {
    'Content-Type': "application/json;charset=UTF-8",
    'token': localStorage.getItem('ufo-token')
  },
})

// 模拟登录数据 
// const ajax = axios.create({
//   baseURL: 'http://rap2api.taobao.org/app/mock'
// })

// request拦截器
ajax.interceptors.request.use(config => {
  console.log(config)
  // Do something before request is sent
  if (localStorage.getItem('ufo-token')) {
    config.headers.common['token'] = localStorage.getItem('ufo-token'); //让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  return Promise.reject(error)
})

// respone拦截器
ajax.interceptors.response.use(resp => {
    if (resp.status === 200) {
      return resp.data
    }
  },
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

// 登录
export const postLogin = (params) => {
  return ajax.post(`/v1/rest/login/doLogin?phone=${params.phoneNum}&passWord=${params.password}`)
}
// export const postLogin = () => {
//   return ajax.post(`/167512/api/login`)
// }

// 前台业主部分
// 首页项目信息
export const getProInfo = (params) => {
  return ajax.get(`/v1/rest/login/getProject?phone=${params}`)
}
// 业主项目概况
export const getOwnerPro = (params) => {
  return ajax.get(`/v1/rest/project/projectInfo?id=${params}`)
}
// 前台业主班组信息
export const getOwnerTeamInfo = (params) => {
  return ajax.get(`/v1/rest/team/teamInfo?projectId=${params}`)
}
// 设计出图
export const getDrawing = (params) => {
  return ajax.get('')
}
// 装修周报列表
export const getWeeklyReportList = (params) => {
  return ajax.get(`/v1/rest/decoration/getYearAndMonth?projectId=${params}`)
}
// 装修周报每周详情
export const getWeeklyReportDetail = (params) => {
  return ajax.get(`/v1/rest/decoration/getWeeklyInfo?projectId=${params.projectId}&date=${params.date}`)
}
// 装修日报列表
export const getDailyReportList = (params) => {
  return ajax.get(`/v1/rest/decoration/getYearAndMonthAndDate?projectId=${params}`)
}
// 装修日报每日详情
export const getDailyReportdetail = (params) => {
  return ajax.get(`/v1/rest/decoration/getDailyInfo?projectId=${params.projectId}&date=${params.date}`)
}
// 出勤日期列表
export const getAttendance = (params) => {
  return ajax.get(`/v1/rest/attendance_record/getDate?projectId=${params}`)
}
//考勤详情
export const getAttendanceDetail = (params) => {
  return ajax.get(`/v1/rest/attendance_record/getInfo?projectId=${params.projectId}&date=${params.date}`)
}
//材料追踪
export const getMaterialTrack = (params) => {
  return ajax.get(`/v1/rest/material/materialList?projectId=${params}`)
}
// 材料追踪详情
export const getMaterialInfo = (params) => {
  return ajax.get(`/v1/rest/material/materialInfo?projectId=${params.projectId}&skey=${params.skey}`)
}
// 智能办公
export const getIntelligentOffice = () => {
  return ajax.get(`/v1/rest/intelligentOffice/getAll`)
}


// 项目经理部分
// 后台项目经理首页项目
export const getManagerPro = (params) => {
  return ajax.get(``)
}
// 上传图片
export const postUpolad = (params) => {
  return ajax2.post('/v1/rest/file/uploadOSS',params)
}
// 添加日报
export const postAddDaily = (params) => {
  return ajax3.post('/v1/rest/decoration/addDaily',params)
}
// 查看日报列表
export const getAddDailyList = (params) => {
  return ajax.get(`/v1/rest/decoration/getYearAndMonthAndDate?projectId=${params}`)
}
// 查看日报详情
export const getAddDailyDetail = (params) => {
  return ajax.get(`/v1/rest/decoration/getDailyInfo?projectId=${params.projectId}&date=${params.date}`)
}
// 添加周报
export const postAddWeekly = (params) => {
  return ajax3.post('/v1/rest/decoration/addWeekly',params)
}
// 查看周报列表
export const getWeeklyList = (params) => {
  return ajax.get(`/v1/rest/decoration/getYearAndMonth?projectId=${params}`)
}
// 获取周报详情
export const getWeeklydetail = (params) => {
  return ajax.get(`/v1/rest/decoration/getWeeklyInfo?projectId=${params.projectId}&date=${params.date}`)
}
// 获取材料列表
export const getMaterial = (params) => {
  return ajax.get(`/v1/rest/material/materialList?projectId=${params}`)
}
// 提交材料到货进度
export const Materialprogress = (params) => {
  return ajax.post(`/v1/rest/material/materialInfo?projectId=${params.projectId}&skey=${params.skey}`)
}
// 项目概况
export const getProOverview = (params) => {
  return ajax.get(`/v1/rest/project/projectInfo?id=${params}`)
}
// 班组信息
export const getTeamInfo = (params) => {
  return ajax.get(`/v1/rest/team/teamInfo?projectId=${params}`)
}
// 添加待办事项
export const postDoList = (params) => {
  return ajax.post(``)
}

// 设计师部分
// 后台设计师首页项目
export const getDesignerPro = (params) => {
  return ajax.get(``)
}
// 项目状态
export const getProstate = (params) => {
  return ajax.get(``)
}
// 添加项目状态
export const postAddProState = (params) => {
  return ajax.post(``)
}