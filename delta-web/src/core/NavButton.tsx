import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RouterStore } from 'mobx-react-router';
import styled from 'styled-components';

interface Props {
  link?: string,
  text: string,
  routing?: RouterStore,
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

const Button = styled.div`
font-size: 16px;
padding-left: 15px;
padding-top: 2px;
padding-bottom: 2px;
margin-top: 2px;
margin-bottom: 2px;
`;

const NavButton: React.FC<Props> = (props) => {
  const { link, text, onClick } = props;
  const location = useLocation();

  const active = location.pathname === link;
  const button = <Button onClick={onClick} style={{ fontWeight: active ? 'bold' : undefined }}>{text}</Button>;

  if (!link) {
    return button;
  }
  return <NavLink to={link}>{button}</NavLink>;
};

export default NavButton;
