import { useState } from 'react'

// COMPONENTS
import Details from '../Details'

// UI
import { Container, Title, Image, Button } from '../../UI'

export interface ComponentType {
  movie: {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
}

const Card: React.FC<ComponentType> = ({ movie }) => {

  const [isOver, setIsOver] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const url = movie.poster_path ? process.env.REACT_APP_IMAGE_API + movie.poster_path : ''

  // HANDLERS
  const handleClick = () => {
    setIsOpen(true)
  }

  // DATA
  const setImage = (imageUrl: string) => {
    if (!imageUrl) {
      return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg'
    }

    let http = new XMLHttpRequest();

    http.open('HEAD', imageUrl, false);
    http.send();


    return http.status != 404 ? imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg'
  }

  return <>
    <Button onClick={() => handleClick()} direction="column" onMouseOver={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)} padding="0" overflow="hidden" width="184px" height="275px" bgColor="var(--gray)" margin="8px">

      <Container padding={isOver ? '8px' : '0px'} direction="column" bgColor="#911d14cc" width="184px" height={isOver ? '275px' : '0px'} position="relative" overflow="hidden" margin={isOver ? "0 0 -275px 0" : "0"}>
        <Title font="normal 16px/21px Nunito" color="var(--white)">{movie.release_date ? movie.release_date.substring(0, 4) : '----'}</Title>
        <Title color="var(--white)">{movie.title}</Title>
      </Container>

      <Image width="184px" height="275px" src={setImage(url)} />

    </Button>

    <Details isOpen={isOpen} close={() => setIsOpen(false)} movie={movie} />
  </>
}

export default Card;