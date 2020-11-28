import { AssetType } from '../assetType/types';
import { EncryptionKey } from '../encryptionKey/types';
import { JobExecution } from '../job/types';

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
