import Axios, { AxiosResponse } from 'axios';
import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { AuthBase, InitialToken } from '../config/http';
import { LoginRequest, LoginResponse } from './types';

@injectable()
export default class AuthStore {
    token: string = InitialToken;

    constructor() {
        makeAutoObservable(this);
    }

    *login(username: string, password: string) {
        const payload: LoginRequest = { username, password };

        try {
            const response: AxiosResponse<LoginResponse> =
                yield Axios.post<LoginResponse>(AuthBase + 'login', payload);
            this.token = response.data.token;
            return true;
        } catch {
            return false;
        }
    }

    logout() {
        this.token = '';
    }
}
