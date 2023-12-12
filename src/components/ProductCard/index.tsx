import { ShoppingCartSimple } from "phosphor-react";

import ProductTag from "../ProductTag";
import QuantityInput from "../QuantityInput";

import Coffe from "../../assets/product-sample.svg";

import * as S from "./styles";

const ProductCard = () => {
  return (
    <S.ProductCardContainer>
      <S.Image src={Coffe} alt="Imagem de uma xícara de cáfé expresso" />
      <S.ProductTags>
        <ProductTag label="Tradicional" />
      </S.ProductTags>
      <S.CardDescription>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </S.CardDescription>

      <S.CardFooter>
        <S.ProductPrice>R$ 9,90</S.ProductPrice>
        <S.Quantity>
          <QuantityInput />
        </S.Quantity>
        <S.AddToCart>
          <ShoppingCartSimple size={22} weight="fill" />
        </S.AddToCart>
      </S.CardFooter>
    </S.ProductCardContainer>
  );
};

export default ProductCard;
