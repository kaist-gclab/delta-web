import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, IconName } from '@blueprintjs/core';
import { RouterStore } from 'mobx-react-router';

interface Props {
  link?: string,
  icon: IconName,
  text: string,
  routing?: RouterStore,
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

const NavButton: React.FC<Props> = (props) => {
  const { link, icon, text, onClick } = props;
  const location = useLocation();

  const button = <Button
    onClick={onClick}
    className="bp3-minimal"
    icon={icon}
    text={text}
    active={location.pathname === link}
  />;
  if (!link) {
    return button;
  }
  return <NavLink to={link}>{button}</NavLink>;
};

export default NavButton;
