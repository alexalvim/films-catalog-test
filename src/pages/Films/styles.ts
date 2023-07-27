import styled from 'styled-components';
import { colors } from '../../colors';
import { spaces } from '../../spaces';
import { typo } from '../../typo';

export const ContentWrapper = styled.div`
  background-color: ${colors.darkestColor};
  color: ${colors.lightestColor};
  display: flex;
  min-height: 100%;
  padding: ${spaces.medium} ${spaces.base};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin: 0 auto;
  max-width: ${spaces.containerWidth};
  width: 90%;
`;

export const FilmsList = styled.ul`
  padding-top: ${spaces.largest};

  > li {
    margin-bottom: ${spaces.largest};
  }

  @media(min-width: 48rem) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: ${spaces.base};
    row-gap: ${spaces.base};

    > li {
      margin-bottom: 0;
    }
  }

  @media(min-width: 62rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const NotFoundText = styled.span`
  display: block;
  font-size: ${typo.base};
  padding-top: ${spaces.largest};
`;

export const EmptyBannerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const LoadingWrapper = styled.div`
  font-size: ${typo.base};
  padding-top: ${spaces.largest};
`;