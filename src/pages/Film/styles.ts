import styled from 'styled-components';
import { colors } from '../../colors';
import { spaces } from '../../spaces';
import { typo } from '../../typo';
import { Link } from 'react-router-dom';

export const ContentWrapper = styled.div`
  background-color: ${colors.darkestColor};
  color: ${colors.lightestColor};
  display: flex;
  min-height: 100%;
  padding: ${spaces.largest} ${spaces.base};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${spaces.containerWidth};
  width: 90%;
`;

export const LoadingWrapper = styled.div`
  font-size: ${typo.base};
`;

export const BackButton = styled(Link)`
  background-color: transparent;
  border: none;
  color: ${colors.mediumGray};
  cursor: pointer;
  text-decoration: none;
`;

export const TopInfos = styled.span`
  color: ${colors.mediumGray};
  display: block;
  font-size: ${typo.base};
  margin: ${spaces.medium} 0 ${spaces.largest};

  b {
    display: inline-block;
    margin: 0 ${spaces.base};
  }

  span {
    background-color: ${colors.mediumGray};
    border-radius: ${spaces.inputRadius};
    color: ${colors.darkestColor};
    padding: ${spaces.small};
  }
`;

export const MainInfo = styled.div`
  @media(min-width: 48rem) {
    align-items: flex-start;
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const MainImage = styled.img`
  border-radius: ${spaces.imageRadius};
  display: block;
  margin: 0 auto;
  max-width: ${spaces.maxWidthImagesMobile};
  width: 100%;

  @media(min-width: 48rem) {
    flex-grow: 1;
    max-width: 22.5rem;
  }
`;

export const MainText = styled.div`
  margin-top: ${spaces.medium};

  @media(min-width: 48rem) {
    margin-right: ${spaces.largest};
    margin-top: 0;
  }
`;

export const MainTitle = styled.h1`
  font-size: ${typo.medium};
  font-weight: 700;
  
  @media(min-width: 48rem) {
    font-size: ${typo.largest};
  }
`;

export const RateSection = styled.div`
  align-items: center;
  display: flex;
  margin-top: ${spaces.medium};

  > div {
    margin-right: ${spaces.base};
  }

  @media(min-width: 48rem) {
    margin-top: ${spaces.largest};
  }
`;

export const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  align-items: center;
  background-color: ${colors.darkGray};
  border: solid 1px ${colors.mediumGray};
  border-radius: ${spaces.inputRadius};
  color: ${colors.mediumGray};
  cursor: pointer;
  display: flex;
  font-size: ${typo.small};
  justify-content: center;
  padding: ${spaces.small};

  ${({ isFavorite }) => isFavorite ? `
    border: solid 1px ${colors.red};
    color: ${colors.red};
  ` : ''}

  svg {
    height: 1rem;
    margin-right: ${spaces.small};
    width: 1rem;
  }
`;

export const TopicHolder = styled.div`
  margin-top: ${spaces.largest};
`;

export const TopicLabel = styled.h4`
  color: ${colors.mediumGray};
  font-size: ${typo.base};
  margin-bottom: ${spaces.base};
`;

export const TopicParagraph = styled.p`
  font-size: ${typo.base};
`;

export const TopicList = styled.ul`
  > li {
    margin-bottom: ${spaces.base};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TopicsHolder = styled.div`
  @media(min-width: 48rem) {
    display: flex;

    > div {
      flex: 1 1 0;
      margin-right: ${spaces.base};

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;