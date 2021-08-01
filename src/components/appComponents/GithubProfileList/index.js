/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import GithubProfile from '../GitHubProfile';

const GithubProfileListWrapper = styled.div`
  display: none;
  flex-direction: column;
  ${breakpointsMedia({

    md: css`
      display: flex;
    `,
  })}


`;

export default function GithubProfileList() {
  const favoriteUsers = [
    'carlafrimer',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];
  return (
    <GithubProfileListWrapper>

      <ul>
        {favoriteUsers.map((users) => (
          <li>
            <GithubProfile users={users} />
          </li>
        ))}
      </ul>

    </GithubProfileListWrapper>

  );
}
