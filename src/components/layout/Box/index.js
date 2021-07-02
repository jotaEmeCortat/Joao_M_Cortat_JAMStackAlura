import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  //modal
  ${propToStyle('backgroundColor')}
  //formRegister
  ${propToStyle('background')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
  //faqScreen
  ${propToStyle('width')}
  ${propToStyle('listStyle')}
`;
