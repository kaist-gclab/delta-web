import React, { createContext } from 'react';
import AuthStore from '../core/authStore';

const wrappers: ((app: React.FC) => React.FC)[] = [];

export const AuthContext = addStore(AuthStore);

function addStore<T>(store: T) {
    const context = createContext<T>(store);
    const wrapper = (App: React.FC) => {
        return () => <context.Provider value={store}>
            <App />
        </context.Provider>;
    };
    wrappers.push(wrapper);
    return context;
}

export function configure(app: React.FC): React.FC {
    for (const wrapper of wrappers) {
        app = wrapper(app);
    }
    return app;
}
