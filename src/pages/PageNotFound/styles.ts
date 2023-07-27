import styled from 'styled-components';
import { colors } from '../../colors';
import { spaces } from '../../spaces';

export const ContentWrapper = styled.div`
  background-color: ${colors.darkestColor};
  color: ${colors.lightestColor};
  display: flex;
  min-height: 100%;
  padding: ${spaces.largest} ${spaces.base};
`;