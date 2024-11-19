import { ApiBase } from '@/config/http';
import { AuthContext, BrowserTokenStoreKey } from './authContext';
import Axios, { AxiosResponse } from 'axios';
import { LoginRequest, LoginResponse } from './types';
import useLocalStorageState from 'use-local-storage-state';


export function AuthContextProvider(props: { children: React.ReactNode }) {
    const [token, setToken] = useLocalStorageState<string | null>(
        BrowserTokenStoreKey, { defaultValue: null })

    async function login(username: string, password: string): Promise<boolean> {
        const payload: LoginRequest = { username, password };

        try {
            const response: AxiosResponse<LoginResponse> =
                await Axios.post<LoginResponse>(ApiBase + 'auth/1/login', payload);
            applyLoginResponse(response.data);
            return true;
        } catch {
            return false;
        }
    }

    function logout() {
        setToken(null);
    }

    function applyLoginResponse(loginResponse: LoginResponse | null) {
        if (loginResponse === null) {
            setToken(null);
            return;
        }
        setToken(loginResponse.token);
    }

    return <AuthContext.Provider value={{ login, logout, token }}>
        {props.children}
    </AuthContext.Provider>;
}
