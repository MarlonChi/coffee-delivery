import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import { auth } from "../../config/firebase.config";
import coffeImg from "../../assets/banner-img.svg";

import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import { Container } from "../../components/Container";

import * as S from "./styles";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === passwordConfirm) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Conta criada com sucesso!");
          navigate("/login");
        })
        .catch(() => {
          toast.error(
            "Falha ao criar conta, verifique os dados e tente novamente!"
          );
        });
    } else {
      toast.warn("As senhas precisam ser iguais.");
    }
  };

  return (
    <S.SignUpContainer>
      <Header />
      <Container>
        <S.SignUpContent>
          <S.SignUpImage>
            <img src={coffeImg} alt="Imagem de um copo de café" />
          </S.SignUpImage>
          <S.FormContent>
            <Heading size="large">Cadastre-se</Heading>
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Seu endereço de e-mail"
              />
              <Input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Senha"
              />
              <Input
                name="password-confirm"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
                placeholder="Confirme a senha"
              />

              <S.SignInButton type="submit">Cadastrar</S.SignInButton>
            </form>

            <S.AlreadyHaveAnAccount>
              Já possuí conta? <NavLink to="/login">Entrar</NavLink>
            </S.AlreadyHaveAnAccount>
          </S.FormContent>
        </S.SignUpContent>
      </Container>
    </S.SignUpContainer>
  );
};

export default SignUp;
