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
    id: number;
    key: string;
    value: string;
}

export interface CreateAssetRequest {
    assetTypeId: number;
    encryptionKeyId: number | null;
    mediaType: string;
    storeKey: string;
    assetTags: CreateAssetTagRequest[];
    parentJobExecutionId: number | null;
}

export interface CreateAssetTagRequest {
    key: string;
    value: string;
}
