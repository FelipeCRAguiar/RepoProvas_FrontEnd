import { BottomBox, Button, Form, Input, Instruction, StyledLink } from "../../Components/FormComponents";
import logoImg from "../../Assets/logoImg.svg"
import styled from "styled-components";
import { useState } from "react";


export default function Login() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    navigate("/home")
  }

  return (
    <Container>
      <img src={logoImg} alt='logo'/>
      <Form onSubmit={handleSubmit}>
        <Instruction>Login</Instruction>
        <Input type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} disabled={isDisabled} />
        <Input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} disabled={isDisabled} />
        <BottomBox>
          <StyledLink to="/sign-up">Não possui cadastro?</StyledLink>
          <Button type="submit" style={{ cursor: "pointer" }} disabled={isDisabled}>ENTRAR</Button>
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