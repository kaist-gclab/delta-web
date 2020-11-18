import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { Assets } from './types';
import moment from 'moment';

@injectable()
export default class AssetRepository {
    @inject(Http)
    private http!: Http;

    async fetchAssets(): Promise<Assets> {
        const response = await this.http.get('assets');
        return response.data;
    }

    async addModel(name: string, tag: string, content: string, eventTimestamp: string): Promise<void> {
        await this.http.post('assets/model', {
            name, tag, content, eventTimestamp,
        });
    }
}
