import Axios, { AxiosResponse } from 'axios';
import { makeAutoObservable } from 'mobx';
import { AuthBase } from '../config/http';
import { LoginRequest, LoginResponse } from './types';
import TokenStore from './tokenStore';

class AuthStore {
    private tokenStore = TokenStore;

    constructor() {
        makeAutoObservable(this);
    }

    async login(username: string, password: string): Promise<boolean> {
        const payload: LoginRequest = { username, password };

        try {
            const response: AxiosResponse<LoginResponse> =
                await Axios.post<LoginResponse>(AuthBase + 'auth/1/login', payload);
            this.applyLoginResponse(response.data);
            return true;
        } catch {
            return false;
        }
    }

    private applyLoginResponse(loginResponse: LoginResponse | null) {
        if (loginResponse === null) {
            this.tokenStore.clear();
            return;
        }
        this.tokenStore.setToken(loginResponse.token);
    }

    get token() {
        return this.tokenStore.token;
    }

    logout() {
        this.tokenStore.clear();
    }
}

export default new AuthStore();
