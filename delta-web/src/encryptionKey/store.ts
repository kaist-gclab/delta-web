import { injectable, inject } from 'inversify';
import { observable, flow } from 'mobx';
import EncryptionKeyRepository from './repository';
import { EncryptionKeys } from './types';

@injectable()
class EncryptionKeyStore {
    @observable
    encryptionKeys?: EncryptionKeys;

    @inject(EncryptionKeyRepository)
    private encryptionKeyRepository!: EncryptionKeyRepository

    fetchAssets = flow(function* (this: EncryptionKeyStore) {
        this.encryptionKeys = yield this.encryptionKeyRepository.fetchEncryptionKeys();
    })
}

export default EncryptionKeyStore;
