'use client';

import fetcher from '@/core/fetcher';
import { SWRConfig } from 'swr';

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SWRConfig value={{ fetcher }}>
    {children}
  </SWRConfig>
}
