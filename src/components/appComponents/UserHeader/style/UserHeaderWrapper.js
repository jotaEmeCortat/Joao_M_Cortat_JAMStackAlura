import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const UserHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 0;
  align-items: center;
  margin:88px 16px 30px 16px;
  ${breakpointsMedia({
    md: css`
      margin: 96px 80px 60px 80px;
    `,
    xl: css`
      margin: 96px 340px 60px 340px;
    `,
  })}
  img {
    z-index: 1;
    border-radius: 50%;
    float: none;

    ${breakpointsMedia({
    xs: css`
        width: 88px;
      `,
    md: css`
        width: 188px;
      `,
  })}
  }
`;

UserHeaderWrapper.UserName = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0px 16px;
`;
