import styled from 'styled-components';
import { colors } from '../../colors';
import { typo } from '../../typo';
import { Link } from 'react-router-dom';
import { spaces } from '../../spaces';

export const ContentWrapper  = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const TextInfo = styled.span`
  color: ${colors.lightestColor};
  font-size: ${typo.medium};
  font-weight: 700;
  margin-bottom: ${spaces.base};
`;

export const TextLink = styled(Link)`
  color: ${colors.mediumGray};
  cursor: pointer;
  font-size: ${typo.base};
`;