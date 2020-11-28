import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { CreateEncryptionKeyRequest, CreateEncryptionKeyResponse, EncryptionKey } from './types';

@injectable()
export default class EncryptionKeyRepository {
    @inject(Http)
    private http!: Http;

    async create(name: string): Promise<CreateEncryptionKeyResponse> {
        const payload: CreateEncryptionKeyRequest = { name };
        const response = await this.http.post<CreateEncryptionKeyResponse>('encryption-keys', payload);
        return response.data;
    }

    async fetchEncryptionKeys(): Promise<EncryptionKey[]> {
        const response = await this.http.get<EncryptionKey[]>('encryption-keys');
        return response.data;
    }
}
