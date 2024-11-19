import { useRouter } from 'next/navigation';
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

export function Td({ children }: { children: React.ReactNode }) {
  return <td className="p-2">
    {children}
  </td>;
}

export function Tr(props: { children: React.ReactNode } & ({} | { onClick: () => void } | { href: string })) {
  const { onClick, className } = useClickOrHref(props);
  return <tr onClick={onClick}
    className={`hover:bg-gray-100 even:bg-gray-50 ${className}`}>
    {props.children}
  </tr>;
}

export function THead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-gray-100">
    <tr className="divide-x divide-gray-300 border-b border-gray-300">
      {children}
    </tr>
  </thead>;
}

export function Th({ children, className }: { children: React.ReactNode, className?: string }) {
  return <th className={`p-2 font-bold ${className}`}>
    {children}
  </th>;
}
