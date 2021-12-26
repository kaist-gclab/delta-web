import { inject, injectable } from 'inversify';
import { makeAutoObservable, runInAction } from 'mobx';
import { Asset } from './types';
import AssetRepository from './repository';

@injectable()
class AssetStore {
    assets?: Asset[];
    asset?: Asset | null;

    @inject(AssetRepository)
    private assetRepository!: AssetRepository

    constructor() {
        makeAutoObservable(this);
    }

    async fetchAll(name: string | null = null, tag: string | null = null) {
        let assets: Asset[] = await this.assetRepository.fetchAll();
        if (name) {
            assets = assets.filter(a => a.assetTags.find(t => t.key === 'Name' && t.value.includes(name)));
        }
        if (tag) {
            assets = assets.filter(a => a.assetTags.find(t => t.key === 'Tag' && t.value.includes(tag)));
        }
        runInAction(() => { this.assets = assets; });
    }

    async fetch(id: string) {
        this.asset = undefined;
        await this.fetchAll();
        runInAction(() => { this.asset = this.assets?.find(e => e.id === id) ?? null; });
    }

    async addModel(name: string, tag: string, content: string, eventTimestamp: string) {
        await this.assetRepository.addModel(name, tag, content, eventTimestamp);
    }
}

export default AssetStore;
