import BannerMain from "../../components/BannerMain";
import Header from "../../components/Header";
import ProductList from "../../sections/ProductList";

import * as S from "./styles";

const Main = () => {
  return (
    <S.MainContainer>
      <Header />
      <BannerMain />
      {/* <ProductList /> */}
    </S.MainContainer>
  );
};

export default Main;
