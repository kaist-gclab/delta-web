import { injectable, inject } from 'inversify';
import { observable, flow, makeAutoObservable } from 'mobx';
import EncryptionKeyRepository from './repository';
import { CreateEncryptionKeyResponse, EncryptionKey } from './types';

@injectable()
class EncryptionKeyStore {
    encryptionKeys?: EncryptionKey[];

    @inject(EncryptionKeyRepository)
    private encryptionKeyRepository!: EncryptionKeyRepository

    constructor() {
        makeAutoObservable(this);
    }

    *createEncryptionKey(name: string) {
        const result: CreateEncryptionKeyResponse = yield this.encryptionKeyRepository.create(name);
        return result;
    }

    *fetchEncryptionKeys() {
        this.encryptionKeys = yield this.encryptionKeyRepository.fetchEncryptionKeys();
        this.encryptionKeys = this.encryptionKeys?.sort((a, b) => a.id - b.id);
    }
}

export default EncryptionKeyStore;
