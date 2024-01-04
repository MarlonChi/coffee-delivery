import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { setUser } from "../../store/auth/slice";

import * as S from "./styles";
import Header from "../../components/Header";
import { Container } from "../../components/Container";
import coffeImg from "../../assets/banner-img.svg";
import Heading from "../../components/Heading";
import Input from "../../components/Input";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        const userData = JSON.stringify(user);
        dispatch(setUser(userData));
        navigate("/home");
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <S.LoginContainer>
      <Header />
      <Container>
        <S.LoginContent>
          <S.LoginImage>
            <img src={coffeImg} alt="Imagem de um copo de café" />
          </S.LoginImage>
          <S.FormContent>
            <Heading size="large">Login</Heading>
            <form onSubmit={handleLogin}>
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Seu endereço de e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />

              <S.SignInButton type="submit">Entrar</S.SignInButton>
            </form>

            <S.AlreadyHaveAnAccount>
              Não tem conta? <NavLink to="/signin">Cadastre-se</NavLink>
            </S.AlreadyHaveAnAccount>
          </S.FormContent>
        </S.LoginContent>
      </Container>
    </S.LoginContainer>
  );
};

export default Login;
