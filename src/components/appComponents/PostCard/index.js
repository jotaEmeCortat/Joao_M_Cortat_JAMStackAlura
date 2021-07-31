/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import {
  AvatarIcon, BookmarkIcon, HeartIcon, MessageRoundedIcon, PaperPlaneIcon, ThreeDotsIcon,
} from '../../commons/icons';
import { Box } from '../../layout/Box';
import PostsCardWrapper from './style';
import Text from '../../commons/Text';

export default function PostsCard({ posts, photo, user }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      justifyContent="center"
    >
      {posts.reverse().map((post) => (
        <PostsCardWrapper key={post._id}>
          <PostsCardWrapper.Header>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <AvatarIcon
                src={photo.photoUrl}
                alt={photo.description}
                width="32px"
                height="32px"
              />
              <Text
                variant="paragraphy"
                tag="p"
                color="tertiary.main"
                style={{
                  padding: '0px 10px',
                }}
              >
                {user.username}
              </Text>
            </Box>

            <ThreeDotsIcon />

          </PostsCardWrapper.Header>
          <Box>
            <Image
              alt={post.description}
              src={post.photoUrl}
              width="500px"
              height="500px"
            />
          </Box>
          <PostsCardWrapper.Stats>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <HeartIcon />
              <Text
                variant="paragraph"
                color="tertiary.main"
                marginRight="15px"
              >
                {post.likes.length}
              </Text>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <MessageRoundedIcon />
              <Text
                variant="paragraph"
                color="tertiary.main"
                marginRight="15px"
              >
                1.2k
              </Text>
            </Box>

            <PaperPlaneIcon />
            <BookmarkIcon />

          </PostsCardWrapper.Stats>
        </PostsCardWrapper>
      ))}
    </Box>
  );
}

PostsCard.defaultProps = {
  posts: [],
};

PostsCard.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    }),
  ),
  photo: PropTypes.shape({
    photoUrl: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};
