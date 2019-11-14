import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, IconName } from '@blueprintjs/core';
import { RouterStore } from 'mobx-react-router';
import { inject, observer } from 'mobx-react';

interface Props {
  link?: string,
  icon: IconName,
  text: string,
  routing?: RouterStore,
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) & ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

@inject('routing')
@observer
class NavButton extends React.Component<Props> {
  render() {
    const { link, icon, text, routing, onClick } = this.props;
    const button = <Button
      onClick={onClick}
      className="bp3-minimal"
      icon={icon}
      text={text}
      active={routing && routing.location.pathname === link}
    />;
    if (!link) {
      return button;
    }
    return <NavLink to={link}>{button}</NavLink>;
  }
}

export default NavButton;
