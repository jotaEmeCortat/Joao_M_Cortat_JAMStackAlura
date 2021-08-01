import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
  padding: 0;
  margin: 0;
  z-index: 99;
  ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      width: 100%;
      padding: 0 80px 0 80px;
    `,
    lg: css`
     padding: 0 175px 0 175px;
    `,
    xl: css`
     
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    xs: css`
      justify-content: center;
      padding: 12px 0;
    `,
    md: css`
      flex-grow: 1;
      display: block;
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuWrapper.RightSide = styled.div`
  display: flex;
  align-items: center;
  
  ${breakpointsMedia({
    xs: css`
      justify-content: space-evenly;
      background: #fff;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
      border-radius: 24px 24px 0px 0px;
      bottom: 0;
      width: 100%;
      flex: 1;
      order: 1;
      position: fixed;
    `,
    md: css`
      justify-content: space-between;
      position: initial; 
      box-shadow: none;
      border-radius: 0px;
    `,
  })}
`;
