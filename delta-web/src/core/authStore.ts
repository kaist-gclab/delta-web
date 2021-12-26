import Axios, { AxiosResponse } from 'axios';
import { injectable } from 'inversify';
import { makeAutoObservable, runInAction } from 'mobx';
import { AuthBase, InitialToken } from '../config/http';
import { LoginRequest, LoginResponse } from './types';

@injectable()
export default class AuthStore {
    token: string = InitialToken;

    constructor() {
        makeAutoObservable(this);
    }

    async login(username: string, password: string): Promise<boolean> {
        const payload: LoginRequest = { username, password };

        try {
            const response: AxiosResponse<LoginResponse> =
                await Axios.post<LoginResponse>(AuthBase + 'login', payload);
            runInAction(() => { this.token = response.data.token; });
            return true;
        } catch {
            return false;
        }
    }

    logout() {
        this.token = '';
    }
}
