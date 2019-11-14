import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { Assets } from './types';

@injectable()
export default class AssetRepository {
    @inject(Http)
    private http!: Http;

    async fetchAssets(): Promise<Assets> {
        const assets = [{ id: 1, content: 'one' }, { id: 2, content: 'two' }];
        return Promise.resolve(assets);
    }
}
