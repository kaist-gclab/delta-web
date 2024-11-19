import { EncryptionKeyView } from '@/api/client';
import { compareBigInt } from '@/core/identifier';

export function compareEncryptionKeyViews(a: EncryptionKeyView, b: EncryptionKeyView): number {
    if (a.name === b.name) {
        return compareBigInt(a.id, b.id);
    }
    return a.name.localeCompare(b.name);
}
