import { useDispatch } from "react-redux";
import { Minus, Plus, Trash } from "phosphor-react";

import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/cart/slice";

import { OrderItemProps } from "./types";

import * as S from "./styles";

const OrderItem = ({ product }: OrderItemProps) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity({ product }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ product }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart({ product }));
  };

  const productPrice = product.price * product.quantity;

  return (
    <S.OrderItemContainer>
      <img src={product.image} alt={product.name} />
      <S.Actions>
        {product.name}
        <S.Inputs>
          <S.QuantityInputContainer>
            <S.Decrease onClick={handleDecrement}>
              <Minus size={14} weight="bold" />
            </S.Decrease>
            <S.Quantity type="text" value={product.quantity} readOnly />
            <S.Increase onClick={handleIncrement}>
              <Plus size={14} weight="bold" />
            </S.Increase>
          </S.QuantityInputContainer>
          <S.RemoveButton onClick={handleRemoveItem}>
            <Trash size={16} />
            Remover
          </S.RemoveButton>
        </S.Inputs>
      </S.Actions>
      <S.Price>
        {productPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </S.Price>
    </S.OrderItemContainer>
  );
};

export default OrderItem;
