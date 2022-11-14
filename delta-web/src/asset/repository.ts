import Http from '../core/http';
import { injectable } from 'inversify';
import { Asset } from './types';

@injectable()
export default class AssetRepository {
    private http = Http;

    async fetchAll(): Promise<Asset[]> {
        const response = await this.http.get<Asset[]>('assets');
        return response.data;
    }

    async addModel(name: string, tag: string, content: string, eventTimestamp: string): Promise<void> {
        await this.http.post('api/1/assets/model', {
            name, tag, content, eventTimestamp,
        });
    }
}
