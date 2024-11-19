import Link from 'next/link';
import { usePathname } from 'next/navigation';

function computeActive(link: string | undefined, pathname: string) {
  if (link === undefined) {
    return false;
  }
  if (link === '/') {
    return link === pathname;
  }
  return pathname.startsWith(link);
}

type NavButtonProps = {
  text: string;
} & (
    { link: string } |
    { onClick: () => void }
  );

export default function NavButton(props: NavButtonProps) {
  const { text } = props;
  const pathname = usePathname();

  const link = 'link' in props ? props.link : undefined;
  const onClick = 'onClick' in props ? props.onClick : undefined;
  const active = computeActive(link, pathname);

  const navButton = <button onClick={onClick} aria-pressed={active}
    className="px-3 py-1 whitespace-nowrap text-gray-100 hover:text-gray-300 aria-pressed:bg-blue-300 aria-pressed:text-blue-900 aria-pressed:font-bold rounded select-none">
    {text}
  </button>;

  return link ? <Link href={link}>{navButton}</Link> : navButton;
}
