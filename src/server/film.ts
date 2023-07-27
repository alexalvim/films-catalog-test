import useSWR from 'swr'
import { OMDB_API_KEY, fetcher } from './utils';
import { IFilmReturn } from '../types';

export const useFilm = (filmId: string): IFilmReturn => {
  const { data, error, isLoading } = useSWR(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${filmId}`, fetcher)

  return {
    film: data,
    isLoadingFilm: isLoading,
    isError: error
  }
}