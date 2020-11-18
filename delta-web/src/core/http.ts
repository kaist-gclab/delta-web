import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import TokenService from './tokenService';
import { inject, injectable } from 'inversify';

const ApiBase = 'https://api.delta-test.cqcqcqde.com/api/1/';

@injectable()
export default class Http {
  private axios: AxiosInstance;

  @inject(TokenService)
  private tokenService!: TokenService;

  constructor() {
    this.axios = axios.create({ baseURL: ApiBase });
    this.axios.interceptors.request.use((request) => {
      request.headers = { 'Authorization': `Bearer ${this.tokenService.getToken()}` };
      return request;
    });
  }
  getUri(config?: AxiosRequestConfig | undefined): string {
    return this.axios.getUri(config);
  }
  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.axios.request(config);
  }
  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig | undefined): Promise<R> {
    return this.axios.get(url, config);
  }
  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig | undefined): Promise<R> {
    return this.axios.delete(url, config);
  }
  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig | undefined): Promise<R> {
    return this.axios.head(url, config);
  }
  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<R> {
    return this.axios.post(url, data, config);
  }
  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<R> {
    return this.axios.put(url, data, config);
  }
  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<R> {
    return this.axios.patch(url, data, config);
  }
}
