export const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then(res => res.json());

export const BASE_URL = 'http://localhost:3003';

export const OMDB_API_KEY = '';