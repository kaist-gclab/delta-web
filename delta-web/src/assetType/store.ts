import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import AssetTypeRepository from './repository';

@injectable()
class AssetTypeStore {
    constructor() {
        makeAutoObservable(this);
    }

    @inject(AssetTypeRepository)
    private assetTypeRepository!: AssetTypeRepository
}

export default AssetTypeStore;
