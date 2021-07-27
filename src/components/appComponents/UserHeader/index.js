import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import { UserStats } from '../UserStats';
import { UserHeaderWrapper } from './style/UserHeaderWrapper';

export default function UserHeader({ user, photo }) {
  return (
    <UserHeaderWrapper>
      <Image
        src={photo.photoUrl}
        alt={photo.description}
        width="188px"
        height="188px"
      />
      <UserStats
        statsNumber={user.publicacoes}
        statsTitle="Publicações"
      />
      <UserStats
        statsNumber={user.seguindo}
        statsTitle="Seguindo"
      />
      <UserStats
        statsNumber={user.seguidores}
        statsTitle="Seguidores"
      />
      <UserStats
        statsNumber={user.name}
        statsTitle={user.bio}
      />
    </UserHeaderWrapper>

  );
}

UserHeader.propTypes = {
  user: PropTypes.shape({
    bio: PropTypes.string,
    id: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    publicacoes: PropTypes.node,
    seguindo: PropTypes.node,
    seguidores: PropTypes.node,
  }).isRequired,
  photo: PropTypes.shape({
    photoUrl: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
