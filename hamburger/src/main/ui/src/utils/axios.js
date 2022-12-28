import axios from 'axios';

const BASE_URL = 'http://localhost:8080'

const axiosApi = () => {
    const instance = axios.create({
        baseURL: BASE_URL,
        withCredentials: true,
        headers: {
            'Content-Type' : 'application/json'
         }})
    return instance
}

// auth axios
// const axiosAuthApi = (url, options) => {
//     const token = getItem('suerInformation')
//     const instance = axios.create({
//         baseURL: url,
//         headers: { Authorization : 'Bearer ' + token }
//     })
//     return instance
// }

// axios 인스턴스 생성
const defaultInstance = axiosApi()

// auth 인스턴스 생성
// export const authInstance = axiosAuthApi(BASE_URL)

// 요청 타임아웃 설정
defaultInstance.defaults.timeout = 2500

// 요청 인터셉터 설정
defaultInstance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.error(error)
        return Promise.reject(error)
    }
)

// 응답 인터셉터 설정
defaultInstance.interceptors.response.use(
    response => {
        const result = response.data
        return result
    },
    error => {
        console.error(error)
        return Promise.reject(error)
    }
)

export default defaultInstance