import { injectable, inject } from 'inversify';
import { observable, flow } from 'mobx';
import { Assets } from './types';
import AssetRepository from './repository';

@injectable()
class AssetStore {
    @observable
    assets?: Assets;

    @inject(AssetRepository)
    private assetRepository!: AssetRepository

    fetchAssets = flow(function* (this: AssetStore) {
        this.assets = yield this.assetRepository.fetchAssets();
    })
}

export default AssetStore;
