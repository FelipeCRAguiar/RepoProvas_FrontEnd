import { BottomBox, Button2, Form, Input, Instruction, StyledLink } from "../../Components/FormComponents";
import logoImg from "../../Assets/logoImg.svg"
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    navigate("/")
  }

  return (
    <Container>
      <img src={logoImg} alt='logo'/>
      <Form onSubmit={handleSubmit}>
        <Instruction>Login</Instruction>
        <Input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} disabled={isDisabled} />
        <Input type="password" placeholder="Senha" name="password" value={formData.password} onChange={handleChange} disabled={isDisabled} />
        <Input type="password" placeholder="Confirme sua senha" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} disabled={isDisabled} />
        <BottomBox>
          <StyledLink to="/">Já possui cadastro?</StyledLink>
          <Button2 type="submit" style={{ cursor: "pointer" }} disabled={isDisabled}>CADASTRAR</Button2>
        </BottomBox>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 55px;
    margin-bottom: 220px;
  }
`