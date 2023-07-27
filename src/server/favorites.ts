import useSWR, { mutate } from 'swr'
import { BASE_URL, fetcher } from './utils';
import { IRequestReturnFavorite, IUseFavoriteReturn } from '../types';


export const useFavorites = (): IUseFavoriteReturn => {
  const { data, error, isLoading } = useSWR(`${BASE_URL}/favorites`, fetcher)

  return {
    favorites: data,
    isLoadingFavorites: isLoading,
    isFavoriteError: error
  }
}

export const addFavorite = async (filmId: string): Promise<IRequestReturnFavorite> => {
  try {
    await fetcher(`${BASE_URL}/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        filmId
      })
    })

    await mutate(`${BASE_URL}/favorites`);
    return { success: true };
  } catch(e) {
    console.log(e)
    return { error: true }
  }
}

export const removeFavorite = async (id: number): Promise<IRequestReturnFavorite> => {
  try {
    await fetcher(`${BASE_URL}/favorites/${id}`, {
      method: 'DELETE',
    })
    
    await mutate(`${BASE_URL}/favorites`);
    return { success: true };
  } catch(e) {
    console.log(e)
    return { error: true }
  }
}