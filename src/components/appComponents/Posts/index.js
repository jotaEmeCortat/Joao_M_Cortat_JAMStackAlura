/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { Box } from '../../layout/Box';

const PostWrapper = styled.div`
  display:flex;
  justify-content:center;
  flex-direction: column;
  flex-wrap: nowrap;
  margin:0 16px;
  ${breakpointsMedia({
    md: css`
      margin: 0 60px;
    `,
    lg: css`
      margin: 0 160px;
    `,
  })}
`;

export default function Posts({ posts }) {
  return (
    <PostWrapper>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
      >
        {posts.reverse().map((post) => (
          <Box
            flex="1 0 25%"
            margin={{ xs: '4px', md: '8px' }}
            key={post._id}
          >
            <button
              type="button"
              style={{
                cursor: 'pointer',
              }}
            >
              <Image
                alt={post.description}
                src={post.photoUrl}
                width="279px"
                height="279px"
              />
              <div key={post._id}>
                {post.likes}
              </div>
            </button>

          </Box>
        ))}
      </Box>

    </PostWrapper>
  );
}

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    }),
  ),
};
