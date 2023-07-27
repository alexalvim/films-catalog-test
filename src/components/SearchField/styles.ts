import styled from 'styled-components';
import { colors } from '../../colors';
import { spaces } from '../../spaces';
import { typo } from '../../typo';

export const ContentWrapper = styled.div`
  background-color: ${colors.lightestColor};
  border-radius: ${spaces.inputRadius};
  color: ${colors.mediumGray};
  display: flex;
  overflow: hidden;
`;

export const IconWrapper = styled.div`
  padding: ${spaces.small} ${spaces.base};
`;

export const InputField = styled.input`
  border: none;
  font-size: ${typo.small};
  padding: ${spaces.small};
  width: 100%;

  &:focus {
    outline: none;
  }
`;