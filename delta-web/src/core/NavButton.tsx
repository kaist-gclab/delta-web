'use client';

import React from 'react';
import { Button, IconName } from '@blueprintjs/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavButtonProps {
  link?: string;
  icon?: IconName;
  text?: string;
  disabled?: boolean;
  fill?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) &
  ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}

function computeActive(link: string | undefined, pathname: string) {
  if (link === undefined) {
    return false;
  }
  if (link === '/') {
    return link === pathname;
  }
  return pathname.startsWith(link);
}

function NavButton(props: NavButtonProps) {
  const { link, icon, text, onClick, disabled, fill } = props;
  const pathname = usePathname();

  const button = <Button
    minimal
    onClick={onClick}
    icon={icon}
    text={text}
    fill={fill}
    alignText="left"
    active={computeActive(link, pathname)}
    disabled={disabled}
  />;
  if (!link) {
    return button;
  }
  return <Link href={link}>{button}</Link>;
}

export default NavButton;
