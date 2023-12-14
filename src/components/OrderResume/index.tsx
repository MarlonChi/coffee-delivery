import Heading from "../Heading";
import OrderItem from "../OrderItem";

import * as S from "./styles";

const OrderResume = () => {
  return (
    <S.OrderResumeContainer>
      <Heading size="small">Cafés selecionados</Heading>
      <S.OrderResume>
        <OrderItem />
        <S.Divider />
        <S.OrderRow>
          Total de itens <span>R$ 29,70</span>
        </S.OrderRow>
        <S.OrderRow>
          Entrega <span>R$ 3,50</span>
        </S.OrderRow>
        <S.OrderRow>
          <strong>Total</strong>
          <strong>
            <span>R$ 33,20</span>
          </strong>
        </S.OrderRow>
        <S.ConfirmButton>Confirmar Pedido</S.ConfirmButton>
      </S.OrderResume>
    </S.OrderResumeContainer>
  );
};

export default OrderResume;
