import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import AssetTypeRepository from './repository';
import { AssetType, CreateAssetTypeRequest } from './types';

@injectable()
class AssetTypeStore {
    constructor() {
        makeAutoObservable(this);
    }

    assetTypes?: AssetType[];
    assetType?: AssetType | null;

    @inject(AssetTypeRepository)
    private assetTypeRepository!: AssetTypeRepository

    async create(request: CreateAssetTypeRequest) {
        await this.assetTypeRepository.create(request);
    }

    *fetchAll() {
        this.assetTypes = yield this.assetTypeRepository.fetchAll();
        this.assetTypes = this.assetTypes?.sort((a, b) => Number(a.id) - Number(b.id));
    }

    *fetch(id: string) {
        this.assetType = undefined;
        yield this.fetchAll();
        this.assetType = this.assetTypes?.find(e => e.id === id) ?? null;
    }
}

export default AssetTypeStore;
