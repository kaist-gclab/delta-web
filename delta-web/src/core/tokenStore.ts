import { makeAutoObservable } from 'mobx';

class TokenStore {
    private BrowserTokenStoreKey = 'r29ys6vgnz9tv9vfhszh';
    private cached: string | null = null;
    public errorMessage: string | null = null;

    constructor() {
        makeAutoObservable(this);

        this.updateCache();
        window.addEventListener('storage', () => { this.updateCache(); });
    }

    updateCache() {
        this.cached = window.localStorage.getItem(this.BrowserTokenStoreKey);
    }

    setToken(token: string): void {
        window.localStorage.setItem(this.BrowserTokenStoreKey, token);
        this.errorMessage = null;
        this.cached = token;
    }

    clear(): void {
        window.localStorage.removeItem(this.BrowserTokenStoreKey);
        this.cached = null;
    }

    get token(): string | null {
        return this.cached;
    }
}

const tokenStore = new TokenStore();
export default tokenStore;
