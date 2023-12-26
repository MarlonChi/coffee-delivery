import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import ProductTag from "../ProductTag";

import * as S from "./styles";
import { ProductCardProps } from "./types";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../store/cart/slice";
import { RootState } from "../../store/configureStore";

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = () => {
    dispatch(addToCart({ product }));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ product }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ product }));
  };

  const quantityInCart =
    cartItems.find((item: ProductCardProps) => item.id === product.id)
      ?.quantity || 0;

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
        <S.QuantityInputContainer>
          <S.Decrease onClick={handleDecrement}>
            <Minus size={14} weight="bold" />
          </S.Decrease>
          <S.Quantity type="text" value={quantityInCart} readOnly />
          <S.Increase onClick={handleIncrement}>
            <Plus size={14} weight="bold" />
          </S.Increase>
        </S.QuantityInputContainer>
        <S.AddToCart onClick={handleAddToCart}>
          <ShoppingCartSimple size={22} weight="fill" />
        </S.AddToCart>
      </S.CardFooter>
    </S.ProductCardContainer>
  );
};

export default ProductCard;
