import styled from 'styled-components';
import { typo } from '../../typo';
import { spaces } from '../../spaces';
import { colors } from '../../colors';

export const MainImage = styled.img`
  margin-bottom: ${spaces.medium};
`;

export const BannerTitle = styled.h3`
  font-size: ${typo.medium};
  font-weight: 700;
  margin-bottom: ${spaces.base};
`;

export const BannerSubititle = styled.span`
  font-size: ${typo.base};
  color: ${colors.mediumGray};
`;

export const ContentHolder = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
