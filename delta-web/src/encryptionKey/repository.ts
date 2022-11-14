import Http from '../core/http';
import { CreateEncryptionKeyRequest, CreateEncryptionKeyResponse, EncryptionKey } from './types';

class EncryptionKeyRepository {
    private http = Http;

    async create(request: CreateEncryptionKeyRequest): Promise<CreateEncryptionKeyResponse> {
        const response = await this.http.post<CreateEncryptionKeyResponse>('encryption-keys', request);
        return response.data;
    }

    async fetchAll(): Promise<EncryptionKey[]> {
        const response = await this.http.get<EncryptionKey[]>('encryption-keys');
        return response.data;
    }
}

export default new EncryptionKeyRepository();
