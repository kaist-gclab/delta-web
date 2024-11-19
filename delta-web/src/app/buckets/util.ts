import { BucketView, EncryptionKeyView } from '@/api/client';
import { compareBigInt } from '@/core/identifier';

export function compareBuckets(a: BucketView, b: BucketView): number {
    if (a.name !== null && b.name !== null) {
        if (a.name !== b.name) {
            return a.name.localeCompare(b.name);
        }
    }
    return compareBigInt(a.id, b.id);
}
