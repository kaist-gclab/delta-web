export type Assets = Asset[];

export interface Asset {
    id: number;
    storeKey: string;
    assetTags: AssetTag[];
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
