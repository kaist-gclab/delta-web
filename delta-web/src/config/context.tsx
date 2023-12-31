import React, { createContext } from 'react';
import AssetStore from '../asset/store';
import AuthStore from '../core/authStore';
import JobStore from '../job/store';
import JobTypeStore from '../jobType/store';
import MonitoringStore from '../monitoring/store';
import ProcessorNodeStore from '../processorNode/store';

const wrappers: ((app: React.FC) => React.FC)[] = [];

export const AuthContext = addStore(AuthStore);
export const AssetContext = addStore(AssetStore);
export const JobContext = addStore(JobStore);
export const JobTypeContext = addStore(JobTypeStore);
export const MonitoringContext = addStore(MonitoringStore);
export const ProcessorNodeContext = addStore(ProcessorNodeStore);

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
