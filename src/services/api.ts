import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_API,
  timeout: 1000,
  headers: { 'Authorization': 'Bearer ' + process.env.REACT_APP_MOVIE_TOKEN }
});

export const getDiscoverMovies = async () => {
  let res = await api.get('/discover/movie')

  return res.data
}

export const getSearchMovies = async (search: string) => {
  let res = await api.get(`/search/movie?query=${search}`)

  return res.data
}