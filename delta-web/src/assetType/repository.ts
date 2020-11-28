import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { AssetType } from '../asset/types';

@injectable()
export default class AssetTypeRepository {
    @inject(Http)
    private http!: Http;

    async fetchAll(): Promise<AssetType[]> {
        return [];
    }
}
