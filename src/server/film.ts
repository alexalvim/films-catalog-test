import useSWR from 'swr'
import { fetcher } from './utils';
import { IFilmReturn } from '../types';

export const useFilm = (filmId: string): IFilmReturn => {
  const { data, error, isLoading } = useSWR(`https://www.omdbapi.com/?apikey=b435c071&i=${filmId}`, fetcher)

  return {
    film: data,
    isLoadingFilm: isLoading,
    isError: error
  }
}