import React from 'react';
import { Logo } from '../../../theme/Logo';
import Text from '../Text';
import { Button } from '../Button';
import { MenuWrapper } from './style/MenuWrapper';
import { links } from './links';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text
              tag="a"
              variant="paragraphy"
              color="tertiary.light"
              href={link.url}
            >
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button type="button" ghost color="secondary.main">
          Entrar
        </Button>
        <Button
          type="button"
          color="primary.main"
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
