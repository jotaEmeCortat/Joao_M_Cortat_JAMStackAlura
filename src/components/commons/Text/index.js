import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const TextBase = styled.span`
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
  ${propToStyle('padding')}
  font-size: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.fontSize.sx`)};
  font-weight: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.fontWeight`)};
  line-height: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.lineHeight`)};
  ${breakpointsMedia({
    md: css`
      font-size: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.fontSize.md`)};
    `,
    lg: css`
        font-size: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.fontSize.lg`)};
    `,
  })}  
`;

export default function Text({
  tag,
  variant,
  color,
  children,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraphy',
  color: 'tertiary.main',
  children: null,
};

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span', 'input']),
  variant: PropTypes.oneOf(['title', 'subTitle', 'paragraphy']),
  color: PropTypes.node,
  children: PropTypes.node,
};
