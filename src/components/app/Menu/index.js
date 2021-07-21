import React from 'react';
import Link from '../../commons/Link';
import Logo from '../../commons/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import { AddCircleIcon, HeartIcon, HomeIcon } from '../../commons/icons';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Link
          href="/app/profile"
        >
          <Logo size="small" />
        </Link>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        <input type="text" />
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>

        <AddCircleIcon />

        <Link
          href="/app/feed"
        >
          <HomeIcon />
        </Link>

        <HeartIcon />

        {/*         <Avatar
          alt={posts.description}
          src={posts[0].photoUrl}
          width="188px"
          height="188px"
        /> */}

      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
