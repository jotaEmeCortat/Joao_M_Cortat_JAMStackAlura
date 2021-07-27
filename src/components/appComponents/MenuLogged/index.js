import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../commons/Link';
import Logo from '../../commons/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import {
  AddCircleIcon, AvatarIcon, HeartIcon, HomeIcon, SearchIcon,
} from '../../commons/icons';
import { Button } from '../../commons/Button';
import Modal from '../../Modal';
import UploadForm from '../../forms/UploadForm';

// eslint-disable-next-line react/prop-types
export default function MenuLogged({ photo }) {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <Modal
        modal={modal}
        setModal={setModal}
        onClose={() => {
          setModal(!modal);
        }}
      >
        <UploadForm />
      </Modal>

      <MenuWrapper>
        <MenuWrapper.LeftSide>
          <Link
            href="/app/profile"
          >
            <Logo size="small" />
          </Link>
        </MenuWrapper.LeftSide>
        <MenuWrapper.RightSide>

          <SearchIcon />

          <Button
            type="button"
            ghost
            onClick={() => {
              setModal(!modal);
            }}
          >
            <AddCircleIcon />
          </Button>

          <Link
            href="/app/feed"
          >
            <HomeIcon />
          </Link>

          <HeartIcon />

          <Link
            href="/app/profile"
          >
            <AvatarIcon
              src={photo.photoUrl}
              alt={photo.description}
              width="32px"
              height="32px"
            />
          </Link>

        </MenuWrapper.RightSide>
      </MenuWrapper>
    </>
  );
}

MenuLogged.propTypes = {
  photo: PropTypes.shape({
    photoUrl: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
