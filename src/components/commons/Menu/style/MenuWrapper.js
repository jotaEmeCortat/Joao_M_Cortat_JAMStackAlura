import styled, { css } from 'styled-components';
import theme from '../../../../theme';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 18px 0 0 0;
  padding: 0 28px 0 28px;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin: 32px auto 0 auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
      order: initial;
      padding: 0 16px 0 0;
      `,
  })}
`;

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 17px 0 0 0;
  border-top: 1px solid ${theme.colors.tertiary.light.color};
  border-bottom: 1px solid ${theme.colors.tertiary.light.color};
  padding: 12px;
  
  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    transition: ${theme.transition};

    &:hover,
    &:focus {
      font-weight: 500;
      color: ${theme.colors.tertiary.main.color};
    }
  }
`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;
