import { makeAutoObservable, runInAction } from 'mobx';
import { Asset, Assets } from '../api';

class AssetStore {
    assets?: Asset[];
    asset?: Asset | null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchAll(name: string | null = null, tag: string | null = null) {
        let assets: Asset[] = await Assets.getAssets();
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
        runInAction(() => { this.asset = this.assets?.find(e => e.id.toString() === id) ?? null; });
    }

    async addModel(name: string, tag: string, content: string, eventTimestamp: string) {
    }
}

export default new AssetStore();
