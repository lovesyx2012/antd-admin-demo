import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'

const request = axios.create({
    baseURL: isDev ? 'https://api.zisuye.com' : ''
})

const authToken = "Basic " + "ZDc3NzlhMmM2OGIwNjcwYmI5YTY2MjU0MzNmMmNiMTk6YWJmODY5YzU3ODIwOWE2ODIwODExZDg4ZjNiZGRkY2Y=";

request.interceptors.request.use(config => {
console.log(config)
    config.headers = Object.assign({}, config.headers, {'Authorization': authToken})
    return config
})

request.interceptors.response.use(resp => {
    if (resp.status === 200 && resp.data.code === "0000") {
        return resp.data.data
    } else {
        // 统一异常处理
    }
})

export default request