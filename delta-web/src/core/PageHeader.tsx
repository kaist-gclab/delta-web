import { ReactNode } from 'react';

function PageHeader({ children }: { children: ReactNode }) {
  return <h1>{children}</h1>;
}

export default PageHeader;
