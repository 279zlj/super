import axios from 'axios'

//配置api地址
//'http://www.iboatusv.cn/test.json
const baseUrl = 'http://localhost:3000/src/mock/data'

//axios设置key都是默认的不允许改动的
const $ajax = axios.create({
  baseURL:baseUrl,
  timeout:3000
})

export default $ajax
