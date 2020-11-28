import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { AssetType } from '../asset/types';
import AssetTypeRepository from './repository';

@injectable()
class AssetTypeStore {
    constructor() {
        makeAutoObservable(this);
    }

    assetTypes?: AssetType[];
    assetType?: AssetType | null;

    @inject(AssetTypeRepository)
    private assetTypeRepository!: AssetTypeRepository

    *fetchAll() {
        this.assetTypes = yield this.assetTypeRepository.fetchAll();
        this.assetTypes = this.assetTypes?.sort((a, b) => a.id - b.id);
    }
}

export default AssetTypeStore;
