export interface AssetType {
    id: number;
    key: string;
    name: string;
}

export interface CreateAssetTypeRequest {
    key: string;
    name: string;
}
