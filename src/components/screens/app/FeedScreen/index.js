import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import useUserService from '../../../../services/user/useUserService';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import MenuLogged from '../../../appComponents/MenuLogged';
import PostsCard from '../../../appComponents/PostCard';
import GithubProfileList from '../../../appComponents/GithubProfileList';
import GithubProfile from '../../../appComponents/GitHubProfile';
import Text from '../../../commons/Text';
import { Box } from '../../../layout/Box';

const FeedWrapper = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:center;
  flex-wrap:wrap;
  margin:88px auto;
  ${breakpointsMedia({
    md: css`
    flex-direction: row;
    justify-content:space-between;
    flex-wrap:nowrap;
      margin: 96px 60px;
    `,
    xl: css`
      margin: 96px 100px;
    `,
  })}

`;

export default function FeedScreen({ user }) {
  const dados = useUserService.getProfilePage();
  const githubUser = 'jotaemecortat';

  return (
    <>
      {dados.data && (
        <>
          <MenuLogged photo={dados.data.posts[0]} />
          <FeedWrapper>
            <PostsCard posts={dados.data.posts.reverse()} photo={dados.data.posts[0]} user={{ ...user }} />
            <Box>
              <GithubProfile
                users={githubUser}
              />
              <Text
                variant="paragraphy"
                tag="p"
                color="tertiary.light"
                marginTop="25px"
                marginBottom="15px"
              >
                Projetos da galera
              </Text>
              <GithubProfileList />
            </Box>

          </FeedWrapper>

        </>
      )}
    </>
  );
}

FeedScreen.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};
