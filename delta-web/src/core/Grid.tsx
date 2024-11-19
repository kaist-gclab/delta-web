import { ReactNode } from 'react';

export function Row({ children }: { children: ReactNode }) {
  return <div style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  }}>
    {children}
  </div>;
}

export function Column({ children }: { children: ReactNode }) {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: 1,
  }}>
    {children}
  </div>;
}
