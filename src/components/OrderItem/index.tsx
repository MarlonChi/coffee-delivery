import { Trash } from "phosphor-react";

import QuantityInput from "../QuantityInput";

import Product from "../../assets/product-sample.svg";

import * as S from "./styles";

const OrderItem = () => {
  return (
    <S.OrderItemContainer>
      <img src={Product} alt="" />
      <S.Actions>
        Expresso Tradicional
        <S.Inputs>
          <QuantityInput />
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
