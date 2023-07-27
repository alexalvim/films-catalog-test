import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { IFilms } from "../../types"
import { FavoriteButton, ImageWrapper, PosterImage, PosterInfo, PosterSubtitle, PosterText, PosterTitle } from "./styles"

interface IPosterProps {
  film: IFilms;
  isFavorite: boolean;
  showFavorite: boolean;
  onFavorite: () => void;
  onUnfavorite: () => void;
}

export const Poster = ({ film, isFavorite, onUnfavorite, onFavorite, showFavorite }: IPosterProps) => {
  return (
    <ImageWrapper>
      <PosterImage src={film.Poster} alt={`${film.Title} poster`}/>
      <PosterInfo>
        <PosterText>
          <PosterTitle to={`/films/${film.imdbID}`}>
            {film.Title}
          </PosterTitle>
          <PosterSubtitle>
            {film.Year}
          </PosterSubtitle>
        </PosterText>
        {showFavorite ?
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={isFavorite ? onUnfavorite : onFavorite}>
            {isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
          </FavoriteButton> : null}
      </PosterInfo>
    </ImageWrapper>
  )
}