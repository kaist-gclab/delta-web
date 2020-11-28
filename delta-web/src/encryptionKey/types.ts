export interface EncryptionKey {
    id: number
    name: string
    enabled: boolean
}

export interface CreateEncryptionKeyRequest {
    name: string;
}

export interface CreateEncryptionKeyResponse {
    encryptionKey: EncryptionKey;
    value: string;
}
