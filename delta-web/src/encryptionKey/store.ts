import { makeAutoObservable, runInAction } from 'mobx';
import { CreateEncryptionKeyRequest, CreateEncryptionKeyResponse, EncryptionKey, EncryptionKeys } from '../api';

class EncryptionKeyStore {
    encryptionKeys?: EncryptionKey[];
    encryptionKey?: EncryptionKey | null;

    constructor() {
        makeAutoObservable(this);
    }

    async create(request: CreateEncryptionKeyRequest) {
        const result: CreateEncryptionKeyResponse = await EncryptionKeys.create(request);
        return result;
    }

    async fetchAll() {
        const encryptionKeys = await EncryptionKeys.getEncryptionKeys();
        runInAction(() => { this.encryptionKeys = encryptionKeys?.sort((a, b) => Number(a.id) - Number(b.id)); });
    }

    async fetch(id: string) {
        this.encryptionKey = undefined;
        await this.fetchAll();
        runInAction(() => { this.encryptionKey = this.encryptionKeys?.find(e => e.id.toString() === id) ?? null; });
    }
}

export default new EncryptionKeyStore();
