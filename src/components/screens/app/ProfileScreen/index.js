import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import useUserService from '../../../../services/user/useUserService';
import Menu from '../../../app/Menu';
import { Box } from '../../../layout/Box';
import Loading from '../../../commons/Loading';

export default function ProfileScreen() {
  const dados = useUserService.getProfilePage();
  console.log('dados', dados);
  return (
    <div>
      <Menu />
      <Box
        display="flex"
        flexDirection="column"
        flex="1"
        marginLeft="279"
        marginRight="279"
      >
        {dados.loading && <Loading />}
        {!dados.loading && dados.data && (
        <Box display="flex" flexDirection="column" flexWrap="wrap">
          {dados.data.posts.map((post) => (
            // eslint-disable-next-line no-underscore-dangle
            <Box margin={{ xs: '4px', md: '10px' }} key={post._id}>
              <Image
                alt={post.description}
                src={post.photoUrl}
                width="279px"
                height="279px"
              />
            </Box>
          ))}
        </Box>
        )}
        {!dados.loading && dados.error && 'Erro ao carregar os dados!'}
        {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
        {/* <pre>{JSON.stringify(dados.data, null, 4)}</pre> */}
      </Box>
    </div>
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
