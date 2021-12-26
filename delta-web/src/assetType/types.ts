export interface AssetType {
    id: string;
    key: string;
    name: string;
}

export interface CreateAssetTypeRequest {
    key: string;
    name: string;
}
