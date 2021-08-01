/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React from 'react';
import useUserService from '../../../../services/user/useUserService';
import MenuLogged from '../../../appComponents/MenuLogged';
import Posts from '../../../appComponents/Posts';
import { Box } from '../../../layout/Box';
import UserHeader from '../../../appComponents/UserHeader';

export default function ProfileScreen({ user }) {
  const dados = useUserService.getProfilePage();
  return (
    <>
      {dados.data && (
        <>
          <MenuLogged photo={dados.data.posts[0]} />

          <Box
            display="flex"
            flex="1"
            flexDirection="column"
          >
            <UserHeader
              user={{ ...user, ...dados.data.user }}
              photo={dados.data.posts[0]}
            />
            <Posts
              posts={dados.data.posts.reverse()}
            />
          </Box>
        </>
      )}
    </>
  );
}

ProfileScreen.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    publicacoes: PropTypes.number,
    seguindo: PropTypes.number,
    seguidores: PropTypes.number,
  }).isRequired,
};
