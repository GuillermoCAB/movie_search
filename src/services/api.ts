import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_API,
  timeout: 1000,
  headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWExMmVkOTJhMGUxODBjZjgwMGQ3YTQ2MWU4OGNhOCIsInN1YiI6IjYwMjNlNTQwZDZjMzAwMDAzZTZhY2NiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jslq86BQ7MsF1chDzrjFhMBg36Fix1EHzfQBW4FxKmU' }
});

export const getDiscoverMovies = async () => {
  let res = await api.get('/discover/movie')

  return res.data
}

export const getSearchMovies = async (search: string) => {
  let res = await api.get(`/search/movie?query=${search}`)

  return res.data
}