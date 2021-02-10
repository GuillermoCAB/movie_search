import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// ACTIONS
import { removeAlert } from '../../store/reducers/global/actions'

// TYPES
import { ApplicationState } from '../../store'

// UI
import { Container, Title, Button } from '../../UI';

const Alert: React.FC = () => {

  const dispatch = useDispatch()

  const { hasAlert, alertContent } = useSelector((state: ApplicationState) => state.globalState)

  useEffect(() => {
    setup()
  }, [alertContent])

  const handleExit = () => {
    dispatch(removeAlert())
  }

  const setup = () => {
    if (alertContent.timed) {
      setTimeout(() => handleExit(), alertContent.timedAmmount || 15000)
    }
  }

  return <Container direction="column" justify="center" align="center" display={hasAlert ? 'flex' : 'none'} position="absolute" width="100vw" height="100vh" top="0" right="0" background="#00000060" index="100">
    <Container radius="8px" direction="column" width="300px" height="auto" background="var(--white)">
      <Container height="18px" width="100%">
        {!alertContent.onAccept && <Button onClick={handleExit} height="18px" width="auto" background="transparent" margin="8px 10px 0 auto" color="var(--white)">
          X
        </Button>}
      </Container>

      <Container direction="column" width="100%" height="100%" padding="6px 12px 20px">
        <Title font="bold 24px/27px Nunito" color="var(--black)" margin="0 auto 20px"> {alertContent.title} </Title>
        <Title font="normal 16px/19px Nunito" align="center" margin="0 auto"> {alertContent.text} </Title>
      </Container>

      <Container>
        {alertContent.onAccept ? <Button onClick={alertContent.onAccept}> {alertContent.acceptLabel || 'OK'} </Button> : null}
        {alertContent.onRefuse ? <Button onClick={alertContent.onRefuse} background="var(--red)"> {alertContent.refuseLabel || 'Cancelar'}</Button> : null}
      </Container>
    </Container>
  </Container>;
}

export default Alert;