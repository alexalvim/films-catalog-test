import styled from 'styled-components';
import { spaces } from '../../spaces';
import { colors } from '../../colors';
import { typo } from '../../typo';
import { Link } from 'react-router-dom';

export const ImageWrapper = styled.div`
  align-items: center;
  border-radius: ${spaces.imageRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;

  @media(min-width: 48rem) {
    max-height: 260px;
    height: 29vw;
    overflow: hidden;

    &:hover {
      div {
        opacity: 1;
      }
    }
  }

  @media(min-width: 62rem) {
    max-height: 260px;
    height: 26vw;
  }
`;

export const PosterInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media(min-width: 48rem) {
    background-color: ${colors.opacityGray};
    border-radius: ${spaces.imageRadius};
    height:101%;
    opacity: 0;
    position: absolute;
    width: 101%;
  }
`;

export const PosterText = styled.div`
  font-size: ${typo.small};
  font-weight: 700;

  @media(min-width: 48rem) {
    bottom: ${spaces.base};
    left: ${spaces.medium};
    position: absolute;
  }
`;

export const PosterTitle = styled(Link)`
  color: ${colors.lightestColor};
  display: block;
  margin-bottom: ${spaces.small};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PosterSubtitle = styled.h3`
  display: block;
  color: ${colors.mediumGray};
`;

export const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  background-color: transparent;
  border: none;
  color: ${colors.lightestColor};
  cursor: pointer;
  margin-left: ${spaces.small};
  padding: 0;

  ${({ isFavorite }) => isFavorite ? `color: ${colors.red};` : ''};

  @media(min-width: 48rem) {
    top: ${spaces.medium};
    right: ${spaces.medium};
    margin-left: 0;
    position: absolute;
  }
`;

export const PosterImage = styled.img`
  border-radius: ${spaces.imageRadius};
  margin-bottom: ${spaces.largest};
  max-width: ${spaces.maxWidthImagesMobile};
  width: 100%;

  @media(min-width: 48rem) {
    margin-bottom: 0;
  }
`;