import styled from 'styled-components';
import { Close, AddCircle } from 'styled-icons/ionicons-solid';
import {
  Heart, HomeAlt, Search,
} from 'styled-icons/boxicons-regular';
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
/*   border-width: 2px;
  border-color:#D7385E;
  border-style: solid; */
`;
