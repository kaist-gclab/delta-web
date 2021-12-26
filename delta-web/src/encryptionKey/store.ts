import { injectable, inject } from 'inversify';
import { makeAutoObservable, runInAction } from 'mobx';
import EncryptionKeyRepository from './repository';
import { CreateEncryptionKeyRequest, CreateEncryptionKeyResponse, EncryptionKey } from './types';

@injectable()
class EncryptionKeyStore {
    encryptionKeys?: EncryptionKey[];
    encryptionKey?: EncryptionKey | null;

    @inject(EncryptionKeyRepository)
    private encryptionKeyRepository!: EncryptionKeyRepository

    constructor() {
        makeAutoObservable(this);
    }

    async create(request: CreateEncryptionKeyRequest) {
        const result: CreateEncryptionKeyResponse = await this.encryptionKeyRepository.create(request);
        return result;
    }

    async fetchAll() {
        const encryptionKeys = await this.encryptionKeyRepository.fetchAll();
        runInAction(() => { this.encryptionKeys = encryptionKeys?.sort((a, b) => Number(a.id) - Number(b.id)); });
    }

    async fetch(id: string) {
        this.encryptionKey = undefined;
        await this.fetchAll();
        runInAction(() => { this.encryptionKey = this.encryptionKeys?.find(e => e.id === id) ?? null; });
    }
}

export default EncryptionKeyStore;
