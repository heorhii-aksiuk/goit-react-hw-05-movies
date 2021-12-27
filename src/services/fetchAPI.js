const API_KEY = 'c686fd0cacddd11fd41af6fdd62727e4';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchAPI(query, searchQuery = false) {
  const request = await fetch(
    `${BASE_URL}${query}?api_key=${API_KEY}${
      !searchQuery ? '' : `&query=${searchQuery}`
    }`,
  );
  const response = await request.json();
  const { results } = response;

  return results ?? response;
}

export default fetchAPI;
