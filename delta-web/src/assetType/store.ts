import { inject, injectable } from 'inversify';
import { makeAutoObservable, runInAction } from 'mobx';
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

    async fetchAll() {
        const assetTypes = await this.assetTypeRepository.fetchAll();
        runInAction(() => {
            this.assetTypes = assetTypes?.sort((a, b) => Number(a.id) - Number(b.id));
        });
    }

    async fetch(id: string) {
        this.assetType = undefined;
        await this.fetchAll();
        runInAction(() => { this.assetType = this.assetTypes?.find(e => e.id === id) ?? null; });
    }
}

export default AssetTypeStore;
