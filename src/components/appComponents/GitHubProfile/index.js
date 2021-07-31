import React from 'react';
import { AvatarIcon, GithubOutlineIcon } from '../../commons/icons';
import Text from '../../commons/Text';
import { Box } from '../../layout/Box';

// eslint-disable-next-line react/prop-types
export default function GithubProfile({ users }) {
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      margin="10px 0px"
    >
      <AvatarIcon
        alt={users}
        src={`https://github.com/${users}.png`}
        width="48px"
        height="48px"
      />
      <Text
        variant="paragraphy"
        color="tertiary.main"
        tag="p"
      >
        {users}
      </Text>
      <GithubOutlineIcon />
      <Text
        variant="paragraphy"
        tag="p"
        color="secondary.main"
        href={`https://github.com/${users}.png`}
      >
        Github
      </Text>
    </Box>
  );
}
