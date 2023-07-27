import { useState } from "react";
import { SearchField } from "../../components/SearchField";
import { Container, ContentWrapper, EmptyBannerWrapper, FilmsList, LoadingWrapper, NotFoundText } from "./styles";
import { useFilms } from "../../server/films";
import { Poster } from "../../components/Poster";
import { addFavorite, removeFavorite, useFavorites } from "../../server/favorites";
import { Banner } from "../../components/Banner";
import { useDebounce } from "../../utils";

export const Films = () => {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 300);
  const { films, isLoadingFilms } = useFilms(debouncedSearchText);
  const { favorites, isLoadingFavorites } = useFavorites();

  return (
    <ContentWrapper>
      <Container>
        <SearchField
          onChange={(newValue) => setSearchText(newValue)}
          value={searchText}
          placeholder='Search movies...'/>
        {!debouncedSearchText && !isLoadingFilms ? 
          <EmptyBannerWrapper>
            <Banner
              title="Don't know what to search?"
              subtitle="Here's an offer you can't refuse"
              alt="Empty search image"
              image={require('../../assets/empty-image.png')}/>
          </EmptyBannerWrapper> : null}
        {debouncedSearchText && isLoadingFilms ? (
          <LoadingWrapper>Loading results...</LoadingWrapper>
        ) : null}
        {debouncedSearchText && !isLoadingFilms && (!films || !films.Search || films.Search.length === 0) ?
          <NotFoundText>
            No results found for: {debouncedSearchText}
          </NotFoundText> : null}
        {debouncedSearchText && !isLoadingFilms && films && !films.Error && 
          <FilmsList>
            {films.Search.map((film) => (
              <li key={film.imdbID}>
                <Poster
                  showFavorite={!isLoadingFavorites && favorites !== undefined}
                  isFavorite={isLoadingFavorites || !favorites ? false : !!favorites?.find((fav) => fav.filmId === film.imdbID)}
                  onFavorite={() => addFavorite(film.imdbID)}
                  onUnfavorite={() => {
                    const removeId = favorites?.find((fav) => fav.filmId === film.imdbID)?.id;
                    if(removeId) {
                      removeFavorite(removeId)
                    }
                  }}
                  film={film} />
              </li>
            ))}
          </FilmsList>
        }
      </Container>
    </ContentWrapper>
  );
}