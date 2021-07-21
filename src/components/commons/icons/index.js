import styled from 'styled-components';
import { Close, AddCircle } from 'styled-icons/ionicons-solid';
import {
  Heart, HomeAlt, /* Search, */ UserCircle,
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
margin-left:auto;
`;

export const HomeIcon = styled(HomeAlt)`
width: 32px;
height: 32px;
color:${colors.primary.main.color};
cursor: pointer;
margin-left:auto;
`;

export const HeartIcon = styled(Heart)`
width: 32px;
height: 32px;
cursor: pointer;
margin-left:auto;
`;

export const UserIcon = styled(UserCircle)`
width: 32px;
height: 32px;
cursor: pointer;
margin-left:auto;
`;

export const Avatar = styled(Image)`
border: 10.0723px solid #F2F2F2;
border-radius: 100px;
`;
