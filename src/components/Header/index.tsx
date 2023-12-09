import { MapPin, ShoppingCartSimple } from "phosphor-react";

import { Container } from "../Container";

import Logo from "../../assets/logo.svg";

import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <img src={Logo} alt="" />
          <S.HeaderActions>
            <S.Locale>
              <MapPin size={22} weight="fill" />
              Erechim, RS
            </S.Locale>
            <S.Cart>
              <ShoppingCartSimple size={22} weight="fill" />
            </S.Cart>
          </S.HeaderActions>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  );
};

export default Header;
