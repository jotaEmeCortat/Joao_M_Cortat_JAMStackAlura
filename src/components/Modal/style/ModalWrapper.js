import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: .3s;
  z-index: 100;
  ${({ modal }) => {
    if (modal) {
      return css`
        opacity: 1;
        pointer-events: all;
        overflow: hidden;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
      overflow: hidden;
    `;
  }}
`;

ModalWrapper.ModalContent = styled.div`
  display: flex;
  flex:1;
`;

ModalWrapper.ModalHeader = styled.div`
  display:flex;
  /* margin: 0 -16px 0 -16px; */
`;

/* ModalWrapper.ModalFooter = styled.div`
  display:flex;
  justify-content:center;
`; */
