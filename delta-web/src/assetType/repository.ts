import Http from '../core/http';
import { injectable } from 'inversify';
import { AssetType, CreateAssetTypeRequest } from './types';

@injectable()
export default class AssetTypeRepository {
    private http = Http;

    async create(request: CreateAssetTypeRequest): Promise<AssetType> {
        const response = await this.http.post<AssetType>('asset-types', request);
        return response.data;
    }

    async fetchAll(): Promise<AssetType[]> {
        const response = await this.http.get<AssetType[]>('asset-types');
        return response.data;
    }
}
