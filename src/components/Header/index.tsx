import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { CaretDown, MapPin, ShoppingCartSimple, SignOut } from "phosphor-react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";

import { Container } from "../Container";

import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { setUser } from "../../store/auth/slice";

import Logo from "../../assets/logo.svg";

import * as S from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { state, city } = useSelector((state: RootState) => state.checkout);

  const userData = JSON.parse(
    useSelector((state: RootState) => state.auth.data)
  );

  console.log(userData);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(setUser(null));
        console.log("Signed out successfully");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <S.HeaderActions>
            <S.UserDropdown>
              {userData?.email ? (
                <>
                  {userData?.email}
                  <CaretDown size={22} weight="bold" />
                </>
              ) : (
                <NavLink to="/login">
                  <S.LoginButton>Login/Cadastro</S.LoginButton>
                </NavLink>
              )}
            </S.UserDropdown>

            <S.Locale>
              <MapPin size={22} weight="fill" />
              {state && city && `${city}, ${state}`}
            </S.Locale>

            <NavLink to="/checkout">
              <S.Cart>
                <ShoppingCartSimple size={22} weight="fill" />
              </S.Cart>
            </NavLink>
            <S.Logout onClick={handleLogout}>
              <SignOut size={22} weight="bold" />
            </S.Logout>
          </S.HeaderActions>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  );
};

export default Header;
