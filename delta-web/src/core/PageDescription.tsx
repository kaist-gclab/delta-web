import { ReactNode } from 'react';

function PageDescription({ children }: { children: ReactNode }) {
  return <div className="text-gray-700 text-sm mb-4">
    {children}
  </div>;
}

export default PageDescription;
