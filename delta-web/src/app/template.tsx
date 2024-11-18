'use client';

import fetcher from '@/core/fetcher';
import Layout from '@/core/Layout';
import { SWRConfig } from 'swr';

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SWRConfig value={{ fetcher }}>
    <Layout>
      {children}
    </Layout>
  </SWRConfig>
}
