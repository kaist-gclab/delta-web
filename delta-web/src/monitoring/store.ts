import { makeAutoObservable, runInAction } from 'mobx';
import MonitoringRepository from './repository';

class MonitoringStore {
    constructor() {
        makeAutoObservable(this);
    }

    private monitoringRepository = MonitoringRepository;

    events?: any[];

    async fetchAll() {
        const events = await this.monitoringRepository.getStats();
        runInAction(() => { this.events = events; });
    }
}

export default MonitoringStore;
