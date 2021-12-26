import { inject, injectable } from 'inversify';
import { makeAutoObservable, runInAction } from 'mobx';
import MonitoringRepository from './repository';

@injectable()
class MonitoringStore {
    constructor() {
        makeAutoObservable(this);
    }

    @inject(MonitoringRepository)
    private monitoringRepository!: MonitoringRepository;

    events?: any[];

    async fetchAll() {
        const events = await this.monitoringRepository.getStats();
        runInAction(() => { this.events = events; });
    }
}

export default MonitoringStore;
