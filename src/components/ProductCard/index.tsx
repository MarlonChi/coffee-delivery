import { ShoppingCartSimple } from "phosphor-react";

import ProductTag from "../ProductTag";
import QuantityInput from "../QuantityInput";

import * as S from "./styles";

import { ProductCardProps } from "./types";

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <S.ProductCardContainer>
      <S.Image src={product.image} alt={product.name} />
      <S.ProductTags>
        {product.tags.map((tag) => (
          <ProductTag key={tag} label={tag} />
        ))}
      </S.ProductTags>
      <S.CardDescription>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </S.CardDescription>

      <S.CardFooter>
        <S.ProductPrice>
          R$ {product.price.toFixed(2).replace(".", ",")}
        </S.ProductPrice>
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
