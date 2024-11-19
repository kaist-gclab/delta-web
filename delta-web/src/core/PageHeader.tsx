import { ReactNode } from 'react';

function PageHeader({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl font-semibold my-3">
    {children}
  </h1>;
}

export default PageHeader;
