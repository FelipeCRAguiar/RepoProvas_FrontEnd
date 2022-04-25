import styled from "styled-components"


export default function CategoryItem() {
  
  return (
    <Container>
      <Category>P1</Category>
      <ul>
        <Test>2022 - globo.com (Fulano)</Test>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Category = styled.p`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #000000;
`

const Test = styled.li`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #878787;
`