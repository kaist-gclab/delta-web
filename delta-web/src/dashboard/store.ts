import { injectable, inject } from 'inversify';
import { makeAutoObservable } from 'mobx';
import DashboardRepository from './repository';
import { Stats } from './types';

@injectable()
class DashboardStore {

    statsList?: Stats[];

    constructor() {
        makeAutoObservable(this);
    }

    @inject(DashboardRepository)
    private dashboardRepository!: DashboardRepository;

    *fetchStats() {
        let stats: Stats[] = yield this.dashboardRepository.fetchStats();
        this.statsList = stats.reverse();
    }
}

export default DashboardStore;
