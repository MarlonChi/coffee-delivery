import { Container } from "../../components/Container";
import Heading from "../../components/Heading";
import * as S from "./styles";

const ProductList = () => {
  return (
    <S.ProductListContainer>
      <Container>
        <Heading size="large">Nossos cafés</Heading>
        <S.Products></S.Products>
      </Container>
    </S.ProductListContainer>
  );
};

export default ProductList;
