import axios from 'axios';
import type {AxiosRequestConfig, AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: "http://api.h5ke.top/",
    timeout: 2000, // 2 秒
})

// 请求拦截器, 例如设置请求头token
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对错误做什么操作
    return Promise.reject(error);
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
    // 对数据做什么操作
    return response;
}, function (error) {
    // 对错误做什么操作
    return Promise.reject(error);
})

// 索引签名
interface Data {
    [index: string]: unknown
}

interface Http {
    get: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
    post: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
    put: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
    patch: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
    delete: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
}

const http: Http = {
    get(url, data, config) {
        return instance.get(url, {
            params: data,
            ...config
        });
    },
    post(url, data, config) {
        return instance.post(url, data, config);
    },
    put(url, data, config) {
        return instance.put(url, data, config);
    },
    patch(url, data, config) {
        return instance.patch(url, data, config);
    },
    delete(url, data, config) {
        return instance.delete(url, {
            data: data,
            ...config
        })
    },
}

export default http;