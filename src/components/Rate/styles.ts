import styled from 'styled-components';
import { colors } from '../../colors';
import { spaces } from '../../spaces';
import { typo } from '../../typo';

export const ContentWrapper = styled.div`
  background-color: ${colors.darkGray};
  border-radius: ${spaces.inputRadius};
  display: inline-flex;
  overflow: hidden;
`;

export const ImageSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: ${spaces.base};

  img {
    height: 0.75rem;
  }
`;

export const RateSection = styled.span`
  align-items: center;
  display: flex;
  font-size: ${typo.small};
  justify-content: center;
  padding: ${spaces.base};
`;