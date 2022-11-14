import { makeAutoObservable } from 'mobx';

class HomeStore {
    constructor() {
        makeAutoObservable(this);
    }
}

export default new HomeStore();
