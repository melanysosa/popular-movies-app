const key_api = 'b10038267dddbf4b1e5fd8ba43e9c05c';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key_api}&page=1&include_adult=false`;
const QUERY_API = `https://api.themoviedb.org/3/search/movie?api_key=${key_api}`;
export const getApi = async () => {
	const res = await fetch(API_URL);
	const data = await res.json();
	return data.results;
};
export const searchMovie = async (query) => {
	const url = `${QUERY_API}&query=${query}&page=1&include_adult=false`;
	const res = await fetch(`${query}` ? url : API_URL);
	const data = await res.json();
	return data.results;
};
