import { interfaces } from 'inversify';
import React, { createContext } from 'react';
import AssetStore from '../asset/store';
import HomeStore from '../home/store';
import EncryptionKeyStore from '../encryptionKey/store';
import AppContainer from './inversify';
import AuthStore from '../core/authStore';

const container = AppContainer;
const wrappers: ((app: React.FC) => React.FC)[] = [];

export const AuthContext = add(AuthStore);
export const AssetContext = add(AssetStore);
export const EncryptionKeyContext = add(EncryptionKeyStore);
export const HomeContext = add(HomeStore);

function get<T>(type: interfaces.ServiceIdentifier<T>) {
    return container.get(type);
}

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

function add<T>(type: interfaces.ServiceIdentifier<T>) {
    return addStore(get(type));
}

export function configure(app: React.FC): React.FC {
    for (const wrapper of wrappers) {
        app = wrapper(app);
    }
    return app;
}
