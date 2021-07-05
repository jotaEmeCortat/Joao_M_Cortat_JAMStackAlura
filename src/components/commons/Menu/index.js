import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Text from '../Text';
import { Button } from '../Button';
import { MenuWrapper } from './style/MenuWrapper';
import { links } from './links';
import Link from '../Link';

export default function Menu({ modal, setModal }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Link
          href="/"
          color="secondary.main"
        >
          <Logo size="small" />
        </Link>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
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
        <Button type="button" ghost color="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button
          type="button"
          color="primary.main"
          onClick={() => {
            setModal(!modal);
          }}
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
};
