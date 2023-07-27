export interface IFavoritesList {
  id: number;
  filmId: string;
}

export interface IUseFavoriteReturn {
  favorites: IFavoritesList[] | undefined;
  isLoadingFavorites: boolean;
  isFavoriteError: Error | undefined;
}

export interface IRequestReturnFavorite {
  error?: boolean;
  success?: boolean;
}

export interface IFilms {
  Poster: string;
  Title: string;
  Type: string;
  Year: number;
  imdbID: string;
}

export interface IFilmsResponse {
  Response: boolean;
  totalResults: number;
  Search: IFilms[];
  Error?: string;
}

export interface IUseFilmsResponse {
  films: IFilmsResponse | undefined;
  isLoadingFilms: boolean;
  isError:Error | undefined;
}

export interface IFilmSites {
  Source: string;
  Value: string;
}

export interface IFilmData {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: Date;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: IFilmSites[];
  Released: string;
  Response: boolean;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: number;
  imdbVotes: number;
  Error?: string;
}

export interface IFilmReturn {
  film: IFilmData | undefined;
  isLoadingFilm: boolean;
  isError: Error | undefined;
}
