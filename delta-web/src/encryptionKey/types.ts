export type EncryptionKeys = EncryptionKey[];

export interface EncryptionKey {
    id: number
    name: string
    value?: string
    enabled: boolean
}
