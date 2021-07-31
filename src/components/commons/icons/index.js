import styled from 'styled-components';
import { Close, AddCircle, PaperPlane } from 'styled-icons/ionicons-solid';
import {
  Heart, HomeAlt, Search,
  Bookmark, MessageRounded,
} from 'styled-icons/boxicons-regular';
import { ThreeDots } from 'styled-icons/bootstrap';
import { GithubOutline } from 'styled-icons/evaicons-outline';
import Image from 'next/image';
import { colors } from '../../../theme/colors';

export const CloseButton = styled(Close)`
  width: 32px;
  height: 32px;
  color:${colors.tertiary.light.color};
  cursor: pointer;
  margin-left:auto;
`;

export const AddCircleIcon = styled(AddCircle)`
  width: 32px;
  height: 32px;
  color:${colors.secondary.main.color};
  cursor: pointer;
`;

export const HomeIcon = styled(HomeAlt)`
  width: 32px;
  height: 32px;
  color:${colors.primary.main.color};
  cursor: pointer;
`;

export const HeartIcon = styled(Heart)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const SearchIcon = styled(Search)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const AvatarIcon = styled(Image)`
  border-radius: 50%;
`;

export const PaperPlaneIcon = styled(PaperPlane)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const BookmarkIcon = styled(Bookmark)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const MessageRoundedIcon = styled(MessageRounded)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const ThreeDotsIcon = styled(ThreeDots)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const GithubOutlineIcon = styled(GithubOutline)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  color:${colors.secondary.main.color};
`;
