import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { EncryptionKeys } from './types';

@injectable()
export default class EncryptionKeyRepository {
    @inject(Http)
    private http!: Http;

    async fetchEncryptionKeys(): Promise<EncryptionKeys> {
        const encryptionKeys = [
            { id: 1, name: 'one', value: '1', enabled: true },
            { id: 2, name: 'two', enabled: true },
            { id: 3, name: 'three', value: '3', enabled: false }
        ];
        return Promise.resolve(encryptionKeys);
    }
}
