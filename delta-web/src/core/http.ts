/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiBase } from '../config/http';
import AuthStore from './authStore';

class Http {
    private authStore = AuthStore;

    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({ baseURL: ApiBase });
        this.axios.interceptors.request.use((request) => {
            request.headers.Authorization = `Bearer ${this.authStore.token}`;
            return request;
        });
    }

    getUri(config?: AxiosRequestConfig): string {
        return this.axios.getUri(config);
    }
    request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
        return this.axios.request(config);
    }
    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.get(url, config);
    }
    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.delete(url, config);
    }
    head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.head(url, config);
    }
    options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.options(url, config);
    }
    post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.post(url, data, config);
    }
    put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.put(url, data, config);
    }
    patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.patch(url, data, config);
    }
}

const http = new Http();
export default http;
