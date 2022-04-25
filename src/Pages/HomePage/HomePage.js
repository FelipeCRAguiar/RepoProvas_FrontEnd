import { Container } from "@mui/material";
import { useState } from "react";
import styled from "styled-components"
import TermAccordion from "../../Components/HomePageComponents/TermAccordion";
import Selector from "../../Components/Selector"
import TopBar from "../../Components/TopBar"


export default function HomePage() {
  

  return(
    <ContainerBox>
      <TopBar />
      <Selector />
      <WhiteBox />
      <Container maxWidth="sm">
        <TermAccordion />
      </Container>
    </ContainerBox>
  )
}

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WhiteBox = styled.div`
  height: 50px;
`