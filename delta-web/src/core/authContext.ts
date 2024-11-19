import { createContext } from 'react';

export type AuthContextType = {
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
    token: string | null;
}

export const AuthContext = createContext({} as AuthContextType);

export const BrowserTokenStoreKey = 'r29ys6vgnz9tv9vfhszh';
