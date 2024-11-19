import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export function Button(props: {
  children: ReactNode,
  role?: 'delete' | 'submit',
  disabled?: boolean,
} & ({} | { onClick: () => void } | { href: string })) {
  const { onClick, className } = useClickOrHref(props);
  const intentClassNames = props.role === 'delete' ?
    'bg-red-500 hover:bg-red-600' :
    'bg-blue-500 hover:bg-blue-600';

  return <button type={props.role === 'submit' ? 'submit' : 'button'}
    onClick={onClick} disabled={props.disabled}
    className={`rounded-md px-5 py-3 text-white disabled:opacity-50 disabled:cursor-not-allowed ${intentClassNames} ${className}`}>
    {props.children}
  </button>;
}

export function useClickOrHref(props: {} | { onClick: () => void } | { href: string }) {
  const router = useRouter();
  const isLink =
    ('href' in props && props.href !== undefined) ||
    ('onClick' in props && props.onClick !== undefined);

  const className = isLink ? 'cursor-pointer' : 'cursor-default';
  const onClick = () => {
    if ('onClick' in props) {
      props.onClick();
      return;
    }
    if ('href' in props) {
      router.push(props.href);
      return;
    }
  };
  return { onClick, className: ` ${className} ` };
}
