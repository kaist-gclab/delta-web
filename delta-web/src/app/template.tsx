'use client';

import { AuthContextProvider } from '@/core/AuthContextProvider';
import fetcher from '@/core/fetcher';
import Layout from '@/core/Layout';
import { SWRConfig } from 'swr';

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SWRConfig value={{ fetcher }}>
    <AuthContextProvider>
      <Layout>
        {children}
      </Layout>
    </AuthContextProvider>
  </SWRConfig>
}
