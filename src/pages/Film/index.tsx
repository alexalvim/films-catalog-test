import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from "react-router-dom";
import { useFilm } from "../../server/film";
import { BackButton, Container, ContentWrapper, FavoriteButton, LoadingWrapper, MainImage, MainInfo, MainText, MainTitle, RateSection, TopInfos, TopicHolder, TopicLabel, TopicList, TopicParagraph, TopicsHolder } from "./styles";
import { Rate } from '../../components/Rate';
import { colors } from '../../colors';
import { addFavorite, removeFavorite, useFavorites } from '../../server/favorites';
import { NotFound } from '../../components/NotFound';

export const Film = () => {
  const { filmId } = useParams();
  const { film, isLoadingFilm, isError } = useFilm(filmId || '');
  const { favorites, isLoadingFavorites, isFavoriteError } = useFavorites();
  const isFavorite = !isLoadingFavorites && !!favorites?.find((fav) => fav.filmId === filmId);

  if(isLoadingFilm) {
    return (
      <ContentWrapper>
        <Container>
          <LoadingWrapper>
            Loading...
          </LoadingWrapper>
        </Container>
      </ContentWrapper>
    );
  }

  if(isError || (film && film.Error)) {
    return (
      <ContentWrapper>
        <NotFound
          label={'Film not found'}/>
      </ContentWrapper>
    );
  }

  const showFavorite = !isFavoriteError && favorites !== undefined;
  const rottenTomatoesRate = film?.Ratings.find((rat) => rat.Source === 'Rotten Tomatoes') ?
                                film?.Ratings.find((rat) => rat.Source === 'Rotten Tomatoes')?.Value : '-';

  return (
    <ContentWrapper>
      <Container>
        <BackButton to={'/films'}>
          <ArrowBackIcon/>
        </BackButton>
        <TopInfos>
          {film?.Runtime}
          <b>•</b>
          {film?.Year}
          <b>•</b>
          <span>{film?.Rated}</span>
        </TopInfos>
        <MainInfo>
          <MainImage src={film?.Poster} alt={`${film?.Title} image`}/>
          <MainText>
            <MainTitle>{film?.Title}</MainTitle>
            <RateSection>
              <Rate
                image={require('../../assets/imdb.png')}
                color={colors.imdbColor}
                rating={film?.imdbRating ? `${film?.imdbRating} / 10` : '-'}/>
              <Rate
                image={require('../../assets/tomatoes.png')}
                color={colors.tomatoesColor}
                rating={rottenTomatoesRate || '-'}/>
              {showFavorite ?
                <FavoriteButton isFavorite={isFavorite} onClick={isFavorite ? () => {
                    const favId = favorites?.find((fav) => fav.filmId === filmId)?.id;
                    if(favId) {
                      removeFavorite(favId);
                    }
                  } : () => filmId && addFavorite(filmId)}>
                  { isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/> }
                  { isFavorite ? 'Remove from': 'Add to' } favorites
                </FavoriteButton>: null}
            </RateSection>
            <TopicHolder>
              <TopicLabel>
                Plot
              </TopicLabel>
              <TopicParagraph>
                {film?.Plot}
              </TopicParagraph>
            </TopicHolder>
            <TopicsHolder>
              <TopicHolder>
                <TopicLabel>
                  Cast
                </TopicLabel>
                <TopicList>
                  {film?.Actors.split(',').map((actor, i) => <li key={i}>{actor.trim()}</li>)}
                </TopicList>
              </TopicHolder>
              <TopicHolder>
                <TopicLabel>
                  Genre
                </TopicLabel>
                <TopicList>
                  {film?.Genre.split(',').map((genre, i) => <li key={i}>{genre.trim()}</li>)}
                </TopicList>
              </TopicHolder>
              <TopicHolder>
                <TopicLabel>
                  Director
                </TopicLabel>
                <TopicList>
                  {film?.Director.split(',').map((director, i) => <li key={i}>{director.trim()}</li>)}
                </TopicList>
              </TopicHolder>
            </TopicsHolder>
          </MainText>
        </MainInfo>
      </Container>
    </ContentWrapper>
  );
}