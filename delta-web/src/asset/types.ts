import { AssetType } from '../assetType/types';
import { EncryptionKey } from '../encryptionKey/types';
import { JobExecution } from '../job/types';

export interface Asset {
    id: string;
    assetType: AssetType;
    encryptionKey: EncryptionKey | null;
    mediaType: string;
    storeKey: string;
    assetTags: AssetTag[];
    parentJobExecution: JobExecution | null;
    createdAt: string;
}

export interface AssetTag {
    id: string;
    key: string;
    value: string;
}

export interface CreateAssetRequest {
    encryptionKeyId: number | null;
    assetTypeId: string;
    mediaType: string;
    storeKey: string;
    assetTags: CreateAssetTagRequest[];
    parentJobExecutionId: number | null;
}

export interface CreateAssetTagRequest {
    key: string;
    value: string;
}
