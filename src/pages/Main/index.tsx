import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// @ts-ignore
import ReactStars from 'react-stars'

// IMAGES
import loader from '../../assets/loader.svg'

// ACTIONS
import { setAlert } from '../../store/reducers/global/actions'

// COMPONENTS
import SearchInput from '../../components/SearchInput'
import Card from '../../components/Card'
import EmptyResult from '../../components/EmptyResult'

// UI
import { Container, H1, Title, Button, Image } from '../../UI'

// SERVICES
import { getDiscoverMovies, getSearchMovies } from '../../services/api'

const Main: React.FC = () => {

  const dispatch = useDispatch()

  const [search, setSearch] = useState<string>('')
  const [rating, setRating] = useState<number>(0)
  const [viewType, setViewType] = useState<string>('discovery')

  const [discoveryContent, setDiscoveryContent] = useState<any[]>([])
  const [searchContent, setSearchContent] = useState<any[]>([])
  const [content, setContent] = useState<any[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchMovies()
  }, [])

  useEffect(() => {
    resetContent()
  }, [search])

  useEffect(() => {
    filter()
  }, [rating, discoveryContent, searchContent, viewType])

  // REQS
  const fetchMovies = async () => {
    setIsLoading(true)

    try {
      let res = await getDiscoverMovies()

      setViewType('discovery')
      setDiscoveryContent(res.results)
    } catch (error) {
      dispatch(setAlert({ title: 'Ooops...', text: 'An error occurred. Please try again.' }))
      console.error(error)

      setIsLoading(false)
    }
  }

  const queryMovies = async () => {
    if (!search) return

    setIsLoading(true)

    try {
      let res = await getSearchMovies(search)

      setViewType('search')
      setSearchContent(res.results)
    } catch (error) {
      dispatch(setAlert({ title: 'Ooops...', text: 'An error occurred. Please try again.' }))
      console.error(error)

      setIsLoading(false)
    }
  }

  // HANDLERS
  const resetContent = () => {
    if (discoveryContent.length && !search) {
      setViewType('discovery')
    }
  }

  const handleRating = (e: number) => {

    rating === e ? setRating(0) : setRating(e)
  }

  const filter = () => {
    setIsLoading(true)

    let target = viewType === 'discovery' ? [...discoveryContent] : [...searchContent]

    if (rating) {
      let min = (rating * 2) - 2
      let max = (rating * 2)

      target = target.filter(movie => min <= movie.vote_average && movie.vote_average <= max)
    }

    setContent(target)
    setIsLoading(false)
  }

  const handlePress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && search) {
      queryMovies()
    }
  }

  return <Container direction="column" align="flex-start" background="var(--withe)" width="100%" height="100%">

    <Container direction="column" background="var(--red)" width="100%" height="40%">

      <H1 color="var(--white)" margin="0 0 12px">Movie Search</H1>

      <SearchInput onKeyPress={(e) => handlePress(e)} value={search} onChange={(e) => e ? setSearch(e) : setSearch('')} />

      <Button mobile="height: 30px;" justify="center" width="300px" margin="12px 0 0" onClick={() => queryMovies()}>SEARCH</Button>

      <Container margin="20px 0 0" align="center" direction="column">
        <Title font="normal 16px/21px Nunito" color="var(--white)">Rating</Title>
        <Container margin="4px 0" width="110%" bgColor="var(--white)" height="1px" />
        <ReactStars value={rating} half={false} count={5} onChange={(e: number) => handleRating(e)} size={24} color2={'#ffd700'} />
      </Container>

    </Container>


    <Container background="var(--white)" width="100%" height="60%">
      {isLoading

        ? <Container direction="column">

          <Image src={loader} />
          <Title>Searching...</Title>

        </Container>

        : <Container justify="flex-start" align="flex-start" padding="12px 8px" direction="column" background="var(--white)" width="auto" height="100%" maxWidth="1416px" mobile="width: 100%;">

          {content.length

            ? <><Title margin="0 0 10px 8px">Recent Movies:</Title>

              <Container align="flex-start" justify="flex-start" height="100%" width="auto" overflowY="auto" padding="0" custom="flex-wrap: wrap; &::-webkit-scrollbar {display: none;}" mobile="justify-content: center;width: 100%;">
                {content.map(movie => {
                  return <Card key={movie.id} movie={movie} />
                })}
              </Container>
            </>

            : <EmptyResult />}

        </Container>}
    </Container>

  </Container>
}

export default Main;