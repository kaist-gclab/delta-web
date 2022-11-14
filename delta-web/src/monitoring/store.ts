import { makeAutoObservable, runInAction } from 'mobx';
import { Monitoring } from '../api';

class MonitoringStore {
    constructor() {
        makeAutoObservable(this);
    }

    events?: any[];

    async fetchAll() {
        const events = await Monitoring.getStats();
        runInAction(() => { this.events = events; });
    }
}

export default new MonitoringStore();
