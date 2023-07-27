import useSWR from 'swr'
import { OMDB_API_KEY, fetcher } from './utils';
import { IUseFilmsResponse } from '../types';

export const useFilms = (term: string): IUseFilmsResponse => {
  const { data, error, isLoading } = useSWR(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${term}`, fetcher)

  return {
    films: data,
    isLoadingFilms: isLoading,
    isError: error
  }
}
