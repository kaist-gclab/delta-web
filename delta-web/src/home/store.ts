import { injectable, inject } from 'inversify';
import { makeAutoObservable } from 'mobx';
import HomeRepository from './repository';

@injectable()
class HomeStore {
    constructor() {
        makeAutoObservable(this);
    }

    @inject(HomeRepository)
    private homeRepository!: HomeRepository;
}

export default HomeStore;
