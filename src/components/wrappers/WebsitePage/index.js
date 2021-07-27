import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../Modal';
import { Box } from '../../layout/Box';
import SEO from '../../commons/SEO';
import RegisterForm from '../../forms/RegisterForm';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  footerProps,
}) {
  const [modal, setModal] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        teste: true,
        toggleModal: () => {
          setModal(!modal);
        },
      }}
    >
      <SEO
        {...seoProps}
      />

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        {...pageBoxProps}
      >
        <Modal
          modal={modal}
          setModal={setModal}
          onClose={() => {
            setModal(!modal);
          }}
        >
          <RegisterForm />
        </Modal>

        {menuProps.display && (
          <Menu
            modal={modal}
            setModal={setModal}
          />
        )}

        {children}

        {footerProps.display && (
        <Footer />
        )}

      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
  footerProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  footerProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
