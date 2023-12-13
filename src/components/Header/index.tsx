import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCartSimple } from "phosphor-react";

import { Container } from "../Container";

import Logo from "../../assets/logo.svg";

import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <S.HeaderActions>
            <S.Locale>
              <MapPin size={22} weight="fill" />
              Erechim, RS
            </S.Locale>
            <NavLink to="/checkout">
              <S.Cart>
                <ShoppingCartSimple size={22} weight="fill" />
              </S.Cart>
            </NavLink>
          </S.HeaderActions>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  );
};

export default Header;
