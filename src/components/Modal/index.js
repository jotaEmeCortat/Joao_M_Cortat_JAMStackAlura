import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import { ModalWrapper } from './style/ModalWrapper';
import { Grid } from '../layout/Grid';
import { Box } from '../layout/Box';
/* import Text from '../commons/Text'; */
import { CloseButton } from '../commons/icons';

export const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default function Modal({
  // eslint-disable-next-line react/prop-types
  modal, setModal, onClose, children,
}) {
  const modalRef = useRef();
  const closeModal = ({ target }) => {
    if (modalRef.current === target) {
      setModal(!modal);
    }
  };
  return (
    <ModalWrapper
      modal={modal}
    >
      {modal && <LockScroll />}

      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '100%',
          },
        }}
        animate={modal ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        <ModalWrapper.ModalContent>
          <Grid.Row
            flex={1}
            justifyContent="flex-end"
            margin={0}
            ref={modalRef}
            onClick={closeModal}
          >

            <Grid.Col
              display="flex"
              padding="0"
              flex={1}
              value={{
                xs: 12, md: 6, lg: 5, xl: 4,
              }}
            >

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                flex={1}
                padding={{
                  xs: '18px',
                  md: '0 64px',
                }}
                background="white"
                boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
              >
                <ModalWrapper.ModalHeader>
                  <CloseButton onClick={onClose} />
                </ModalWrapper.ModalHeader>

                {children}

                {/*                 <ModalWrapper.ModalFooter>

                </ModalWrapper.ModalFooter> */}
              </Box>
            </Grid.Col>
          </Grid.Row>
        </ModalWrapper.ModalContent>
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
