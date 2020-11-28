import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
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

    *fetchAssets(name: string | null = null, tag: string | null = null) {
        let assets: Asset[] = yield this.assetRepository.fetchAssets();
        if (name) {
            assets = assets.filter(a => a.assetTags.find(t => t.key === 'Name' && t.value.includes(name)));
        }
        if (tag) {
            assets = assets.filter(a => a.assetTags.find(t => t.key === 'Tag' && t.value.includes(tag)));
        }
        this.assets = assets;
    }

    *addModel(name: string, tag: string, content: string, eventTimestamp: string) {
        yield this.assetRepository.addModel(name, tag, content, eventTimestamp);
    }
}

export default AssetStore;
