import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { AssetType } from '../asset/types';
import AssetTypeRepository from './repository';

@injectable()
class AssetTypeStore {
    constructor() {
        makeAutoObservable(this);
    }

    assetType?: AssetType | null;

    @inject(AssetTypeRepository)
    private assetTypeRepository!: AssetTypeRepository
}

export default AssetTypeStore;
