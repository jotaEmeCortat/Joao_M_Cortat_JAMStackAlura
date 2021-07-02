import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { typographyVariants } from '../../../theme/typographyVariants';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Link from '../Link';

const ButtonGhost = css`
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, color }) => get(theme, `colors.${color}.contrastText`)};
  background-color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

const ButtonWrapper = styled.button`
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 12px 26px;
  opacity: 1;
  font-size: ${typographyVariants.paragraphy.fontSize.sx};
  font-weight: bold;
  ${propToStyle('margin')}
  ${propToStyle('padding')}
  ${propToStyle('display')}
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  
  ${breakpointsMedia({
    md: css`
      padding: 12px 43px;
      font-size: ${typographyVariants.paragraphy.fontSize.md};
    `,
  })}
  
  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
`;

export const Button = ({
  href, color, children, ...props
}) => {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    <ButtonWrapper
      as={tag}
      href={href}
      color={color}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  color: PropTypes.node.isRequired,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
