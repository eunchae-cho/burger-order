'use client'

import axios, {AxiosInstance, AxiosResponse} from "axios";

const handleResponse = (res: AxiosResponse) => {
    return res
}

const handleError = (error: any) => {
    // if (error.response?.status === 400) {
    //     // TODO - Alert
    // }
    return Promise.reject(error)
}

const axiosInstance: AxiosInstance = axios.create()
axiosInstance.defaults.withCredentials = true
axiosInstance.defaults.timeout = 10 * 500
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'
axiosInstance.defaults.headers.put['Content-Type'] = 'application/json'
axiosInstance.interceptors.response.use(handleResponse, handleError)

axiosInstance.interceptors.request.use((req) => {
    return req
})

export { axiosInstance }