
// IMAGE
import emptyImage from '../../assets/emptyImage.svg'
// UI
import { Container, Image, Title } from '../../UI'

const EmptyResult: React.FC = () => {
  return <Container direction="column" margin="auto">
    <Image width="240px" src={emptyImage} />
    <Title margin="12px 0" font="bold 26px/33px Nunito" color="var(--red)">No results!</Title>
    <Title align="center" margin="0" font="normal 18px/20px Nunito">No movies with the search parameters were found. Please try with different parameters.</Title>
  </Container>;
}

export default EmptyResult;