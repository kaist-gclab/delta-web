import Axios, { AxiosResponse } from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';
import { AuthBase, InitialToken } from '../config/http';
import { LoginRequest, LoginResponse } from './types';

class AuthStore {
    token: string = InitialToken;

    constructor() {
        makeAutoObservable(this);
    }

    async login(username: string, password: string): Promise<boolean> {
        const payload: LoginRequest = { username, password };

        try {
            const response: AxiosResponse<LoginResponse> =
                await Axios.post<LoginResponse>(AuthBase + 'auth/1/login', payload);
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

export default new AuthStore();
