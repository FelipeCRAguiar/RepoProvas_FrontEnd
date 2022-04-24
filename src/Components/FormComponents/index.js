import { Link } from "react-router-dom";
import styled from "styled-components";


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const Instruction = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.8);
`

const Input = styled.input`
  width: 460px;
  height: 55px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  border-color: #C0C0C0;
  border: 2px solid;
`

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 460px;
`

const Button = styled.button`
  width: 88px;
  height: 36px;
  background-color: #1976D2;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border: none;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
`

const StyledLink = styled(Link)`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  color: rgba(70, 115, 202, 0.8);
`

const Button2 = styled.button`
  width: 116px;
  height: 36px;
  background-color: #1976D2;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border: none;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
`

export {
  Form,
  Instruction,
  Input,
  BottomBox,
  Button,
  StyledLink,
  Button2
}