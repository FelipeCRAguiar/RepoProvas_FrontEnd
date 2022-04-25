import styled from "styled-components"
import Selector from "../../Components/Selector"
import TopBar from "../../Components/TopBar"


export default function HomePage() {
  return(
    <Container>
      <TopBar />
      <Selector />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`