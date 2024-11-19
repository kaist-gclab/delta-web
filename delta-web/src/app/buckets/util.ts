import { BucketSummary } from '@/api/client';
import { compareBigInt } from '@/core/identifier';

export function compareBuckets(a: BucketSummary, b: BucketSummary): number {
    if (a.name !== null && b.name !== null) {
        if (a.name !== b.name) {
            return a.name.localeCompare(b.name);
        }
    }
    return compareBigInt(a.id, b.id);
}
