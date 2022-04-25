import styled from "styled-components"
import logoImg from "../Assets/logoImg.svg"
import { Input } from "./FormComponents"
import { IoIosLogOut } from "react-icons/io";


export default function TopBar() {
  return(
    <Container>
      <img src={logoImg}/>
      <Input placeholder="Barra de Pesquisa"/>
      <IoIosLogOut className="logoutIcon"/>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 20px;
  padding-left: 80px;
  padding-right: 80px;
  margin-bottom: 100px;

  img {
    height: 63.5px;
  }

  .logoutIcon {
    font-size: 36px;
    color: #000000;
    margin-left: 200px;
  }
`

