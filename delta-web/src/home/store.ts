import { makeAutoObservable } from 'mobx';
import HomeRepository from './repository';

class HomeStore {
    constructor() {
        makeAutoObservable(this);
    }

    private homeRepository = HomeRepository;
}

export default new HomeStore();
