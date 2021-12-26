export interface EncryptionKey {
    id: string;
    name: string;
    enabled: boolean;
}

export interface CreateEncryptionKeyRequest {
    name: string;
}

export interface CreateEncryptionKeyResponse {
    encryptionKey: EncryptionKey;
    value: string;
}
