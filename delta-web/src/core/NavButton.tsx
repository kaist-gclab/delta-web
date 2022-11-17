import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

interface Props {
  link?: string,
  text: string,
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

const NavLinkMenu = styled(NavLink)`
  color: #106ba3;
  text-decoration: none;
`;

const ButtonMenu = styled.span`
  color: #106ba3;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration:underline;
  }
`;

function NavButton(props: Props) {
  const { link, text, onClick } = props;
  const location = useLocation();

  const active = location.pathname === link;
  const button = <Button onClick={onClick} style={{ fontWeight: active ? 'bold' : undefined }}>{text}</Button>;

  if (!link) {
    return <ButtonMenu>{button}</ButtonMenu>;
  }
  return <NavLinkMenu to={link}>{button}</NavLinkMenu>;
}

export default NavButton;
