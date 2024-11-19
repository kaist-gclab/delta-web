import { useClickOrHref } from './Button';

export function Table({ children }: { children: React.ReactNode }) {
  return <table className="table-auto w-full">
    {children}
  </table>;
}

export function TBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-gray-200">
    {children}
  </tbody>;
}

export function Td({ children, numeric }: { children: React.ReactNode, numeric?: boolean }) {
  const isNumber = typeof children === 'number' || typeof children === 'string';
  const content = (numeric && isNumber) ? BigInt(children).toLocaleString() : children;
  return <td className={`p-2 ${numeric ? 'text-right tabular-nums' : ''}`}>
    {content}
  </td>;
}

export function Tr(props: { children: React.ReactNode } & ({} | { onClick: () => void } | { href: string })) {
  const { onClick, className } = useClickOrHref(props);
  return <tr onClick={onClick}
    className={`hover:bg-gray-200 even:bg-gray-100 ${className}`}>
    {props.children}
  </tr>;
}

export function THead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-slate-300">
    <tr className="divide-x divide-slate-500 border-b border-slate-500">
      {children}
    </tr>
  </thead>;
}

export function Th({ children, className }: { children: React.ReactNode, className?: string }) {
  return <th className={`p-2 font-bold ${className}`}>
    {children}
  </th>;
}
