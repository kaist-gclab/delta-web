import { EncryptionKey } from '../encryptionKey/types';
import { JobExecution } from '../job/types';

export type Assets = Asset[];

export interface Asset {
    id: number;
    assetType: AssetType;
    encryptionKey: EncryptionKey | null;
    mediaType: string;
    storeKey: string;
    assetTags: AssetTag[];
    parentJobExecution: JobExecution | null;
    createdAt: string;
}

export interface AssetTag {
    id: number;
    key: string;
    value: string;
}

export interface CreateModelAssetRequest {
    name: string;
    tag: string;
    content: string;
    eventTimestamp: string;
}
