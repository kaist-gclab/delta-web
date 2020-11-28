import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import MonitoringRepository from './repository';

@injectable()
class MonitoringStore {
    constructor() {
        makeAutoObservable(this);
    }

    @inject(MonitoringRepository)
    private monitoringRepository!: MonitoringRepository
}

export default MonitoringStore;
