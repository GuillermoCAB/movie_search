import { useState } from 'react'
// @ts-ignore
import ReactStars from 'react-stars'

// UI
import { Container, Title, Image, Button } from '../../UI'

export interface ComponentType {
  isOpen: boolean
  close: () => void
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

const Details: React.FC<ComponentType> = ({ isOpen, close, movie }) => {

  const url = movie.backdrop_path ? process.env.REACT_APP_IMAGE_API + movie.backdrop_path : ''
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

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

  return <Container display={isOpen ? 'flex' : 'none'} direction="column" position="absolute" width="100vw" height="100vh" top="0" left="0" bgColor="#00000090">
    <Button align="center" justify="center" height="30px" width="30px" padding="0" margin="0 -470px 8px 0" onClick={close} mobile="margin: 0 -250px 8px 0">X</Button>

    <Container overflow="hidden" direction="column" bgColor="var(--white)" width="500px" height="auto" padding="0" radius="8px" mobile="width: 280px;">

      <Image custom="filter: blur(0.7px) brightness(0.5);" margin="0 0 0 0" height="281px" width="500px" src={setImage(url)} mobile="width: 280px;height: 158px;" />

      <Container index="1" margin="-70px 0 0" direction="column" mobile="margin: -50px 0 0">

        <Title mobile="font: bold 16px/21px Nunito;" font="bold 30px/35px Nunito" color="var(--white)">{movie.title}</Title>

        <Container>
          <ReactStars value={(movie.vote_average / 2) || 0} edit={false} count={5} size={vw > 450 ? 28 : 17} color2={'#ffd700'} />
          <Title mobile="font: normal 12px/17px Nunito;" margin="0 0 0 4px" font="normal 18px/28px Nunito" color="var(--white)">{movie.vote_average || 0} ({movie.vote_count || 0})</Title>
        </Container>

      </Container>

      <Title mobile="font: normal 14px/19px Nunito;margin: 20px 12px;" margin="40px 12px 20px" font="normal 16px/21px Nunito">{movie.overview || "No information"}</Title>


    </Container>
  </Container >;
}

export default Details;