import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { CreateEncryptionKeyRequest, CreateEncryptionKeyResponse, EncryptionKey } from './types';

@injectable()
export default class EncryptionKeyRepository {
    @inject(Http)
    private http!: Http;

    async create(request: CreateEncryptionKeyRequest): Promise<CreateEncryptionKeyResponse> {
        const response = await this.http.post<CreateEncryptionKeyResponse>('encryption-keys', request);
        return response.data;
    }

    async fetchAll(): Promise<EncryptionKey[]> {
        const response = await this.http.get<EncryptionKey[]>('encryption-keys');
        return response.data;
    }
}
