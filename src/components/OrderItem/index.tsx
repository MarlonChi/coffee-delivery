import { Minus, Plus, Trash } from "phosphor-react";

import Product from "../../assets/product-sample.svg";

import * as S from "./styles";

const OrderItem = () => {
  const handleIncrement = () => {};

  const handleDecrement = () => {};

  return (
    <S.OrderItemContainer>
      <img src={Product} alt="" />
      <S.Actions>
        Expresso Tradicional
        <S.Inputs>
          <S.QuantityInputContainer>
            <S.Decrease onClick={handleDecrement}>
              <Minus size={14} weight="bold" />
            </S.Decrease>
            <S.Quantity type="text" value="0" readOnly />
            <S.Increase onClick={handleIncrement}>
              <Plus size={14} weight="bold" />
            </S.Increase>
          </S.QuantityInputContainer>
          <S.RemoveButton>
            <Trash size={16} />
            Remover
          </S.RemoveButton>
        </S.Inputs>
      </S.Actions>
      <S.Price>R$ 9,90</S.Price>
    </S.OrderItemContainer>
  );
};

export default OrderItem;
