import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, IconName } from '@blueprintjs/core';

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
  const location = useLocation();

  const button = <Button
    minimal
    onClick={onClick}
    icon={icon}
    text={text}
    fill={fill}
    alignText="left"
    active={computeActive(link, location.pathname)}
    disabled={disabled}
  />;
  if (!link) {
    return button;
  }
  return <NavLink to={link}>{button}</NavLink>;
}

export default NavButton;
