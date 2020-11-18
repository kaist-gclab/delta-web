import { interfaces } from 'inversify';
import React, { createContext } from 'react';
import AssetStore from '../asset/store';
import DashboardStore from '../dashboard/store';
import EncryptionKeyStore from '../encryptionKey/store';
import AppContainer from './inversify';

const container = AppContainer;
const wrappers: ((app: React.FC) => React.FC)[] = [];

export const AssetContext = addStore(get(AssetStore));
export const EncryptionKeyContext = addStore(get(EncryptionKeyStore));
export const DashboardContext = addStore(get(DashboardStore));


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

export function configure(app: React.FC): React.FC {
    for (const wrapper of wrappers) {
        app = wrapper(app);
    }
    return app;
}
