import React from 'react';
import { FooterWrapper } from './styles/FooterWrapper';
import Text from '../Text';

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="Logo Alura" />
      </a>
      <Text as="p" variant="paragraphy" color="tertiary.main">
        Orgulhosamente criado durante
        {' '}
        o
        {' '}
        <Text as="a" variant="paragraphy" color="primary.main" href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </Text>
      </Text>
    </FooterWrapper>
  );
}
