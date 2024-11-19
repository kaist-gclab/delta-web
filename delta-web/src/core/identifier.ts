import { use } from 'react';

export function convertBigIntId(value: string): bigint | null {
    try {
        const b = BigInt(value);
        if (b.toString() !== value) {
            return null;
        }
        if (b <= 0) {
            return null;
        }
        return BigInt(value);
    } catch {
        return null;
    }
}


export function useBigIntId(props: IdParamsProps) {
    const params = use(props.params);
    const id = convertBigIntId(params.id);
    return id;
}

export interface IdParamsProps {
    params: Promise<{ id: string }>;
}

export function compareBigInt(a: bigint, b: bigint): number {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
}
