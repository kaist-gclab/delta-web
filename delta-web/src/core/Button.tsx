import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export function Button(props: { children: ReactNode } & ({} | { onClick: () => void } | { href: string })) {
  const { onClick, className } = useClickOrHref(props);
  return <button onClick={onClick}
    className={`rounded-md px-5 py-3 bg-blue-500 text-white hover:bg-blue-600 ${className}`}>
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
