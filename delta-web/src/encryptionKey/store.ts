import { injectable, inject } from 'inversify';
import { observable, flow, makeAutoObservable } from 'mobx';
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

    *create(request: CreateEncryptionKeyRequest) {
        const result: CreateEncryptionKeyResponse = yield this.encryptionKeyRepository.create(request);
        return result;
    }

    *fetchAll() {
        this.encryptionKeys = yield this.encryptionKeyRepository.fetchAll();
        this.encryptionKeys = this.encryptionKeys?.sort((a, b) => a.id - b.id);
    }

    *fetch(id: number) {
        this.encryptionKey = undefined;
        yield this.fetchAll();
        this.encryptionKey = this.encryptionKeys?.find(e => e.id === id) ?? null;
    }
}

export default EncryptionKeyStore;
